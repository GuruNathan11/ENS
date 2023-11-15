import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from "../config"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const Register = (Empname,Empid,Empemail,EmpContactNo,AddressLine1,AddressLine2,
        Pincode,City,State,BankName,Ifsc,AccountNo,Salary,BankBranch,Password,Usertype) =>{
        axios.post(`${BASE_URL}/register`,{
            Empname,Empid,Empemail,EmpContactNo,AddressLine1,AddressLine2,
            Pincode,City,State,BankName,Ifsc,AccountNo,Salary,BankBranch,Password,Usertype
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        })
        .catch(e=>{
            console.log(`register error ${e}`);
            setIsLoading(false);
        })
    }

    const login = (UserName, Password, OrgName) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/login`,{
            UserName,
            Password,
            OrgName
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        })
        .catch((e => {
            let userInfo = e.data;
            console.log(`login error ${e}`,userInfo.message);
            setIsLoading(false);
        }))
    }

    return (
        <AuthContext.Provider 
        value={{
            isLoading,
            userInfo,
            login,
            Register}}>
            {children}
            </AuthContext.Provider>
    )
}