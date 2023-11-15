import React, {useState,useContext} from "react";
import {
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../../context/AuthContext";

const CustomTextInput = ({ label, value, onChangeText,labelTextColor, onFocus, onBlur, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        if (onFocus) {
            onFocus();
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (onBlur) {
            onBlur();
        }
    };

    return (
        <View style={styles.inputContainer}>
            {isFocused || value ? (
                <Text style={{ color: "black" }}>{label}</Text>
            ) : null}
            <TextInput
                style={styles.input}
                value={value}
                placeholder={!isFocused ? label : ""}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholderTextColor="grey" 
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [Empname, setEmpname] = useState(null);
    const [Empid, setEmpid] = useState(null);
    const [Empemail, setEmpemail] = useState(null);
    const [EmpContactNo, setEmpContactNo] = useState(null);
    const [AddressLine1, setAddressLine1] = useState(null);
    const [AddressLine2, setAddressLine2] = useState(null);
    const [Pincode, setPincode] = useState(null);
    const [City, setCity] = useState(null);
    const [State, setState] = useState(null);
    const [BankName, setBankName] = useState(null);
    const [Ifsc, setIfsc] = useState(null);
    const [AccountNo, setAccountNo] = useState(null);
    const [Salary, setSalary] = useState(null);
    const [BankBranch, setBankBranch] = useState(null);
    const [username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [organization, setOrganization] = useState(null);
    const [Usertype, setUsertype] = useState(null);

    const {isLoading, Register} = useContext(AuthContext)

    const handleRegisterPress = () => {
        navigation.navigate('Login'); // Use navigation object to navigate
    };
    return (
        <ScrollView>
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
            <CustomTextInput
                    style={styles.input}
                    value={Empname}
                    label="Empname"
                    labelTextColor="red"                  
                    onChangeText={text =>  setEmpname(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={Empid}
                    label="Enter your Empid"                  
                    onChangeText={text =>  setEmpid(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={Empemail}
                    label="Enter your Empemail"                  
                    onChangeText={text =>  setEmpemail(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={EmpContactNo}
                    label="Enter your EmpContactNo"                  
                    onChangeText={text =>  setEmpContactNo(text) }
                />
                <CustomTextInput
                    style={styles.input}
                    value={AddressLine1}
                    label="Enter your AddressLine1"                  
                    onChangeText={text =>  setAddressLine1(text) }
                />
                <CustomTextInput
                    style={styles.input}
                    value={AddressLine2}
                    label="Enter your AddressLine2"                  
                    onChangeText={text =>  setAddressLine2(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={Pincode}
                    label="Enter your Pincode"                  
                    onChangeText={text =>  setPincode(text) }
                />
                <CustomTextInput
                    style={styles.input}
                    value={City}
                    label="Enter your City" 
                   labelTextColor="darkgrey"                 
                    onChangeText={text =>  setCity(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={State}
                    label="Enter your State"                  
                    onChangeText={text =>  setState(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={BankName}
                    label="BankName"                  
                    onChangeText={text =>  setBankName(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={Ifsc}
                    label="Ifsc"                  
                    onChangeText={text =>  setIfsc(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={AccountNo}
                    label="AccountNo"                  
                    onChangeText={text =>  setAccountNo(text) }
                />
                <CustomTextInput
                    style={styles.input}
                    value={Salary}
                    label="Salary"                  
                    onChangeText={text =>  setSalary(text) }
                />
                <CustomTextInput
                    style={styles.input}
                    value={BankBranch}
                    label="BankBranch"                  
                    onChangeText={text =>  setBankBranch(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    value={username}
                    label="Username"                  
                    onChangeText={text =>  setUsername(text) }
                />
                 <CustomTextInput
                    style={styles.input}
                    label="Password"
                    value={Password}
                    onChangeText={text => { setPassword(text) }}
                    secureTextEntry
                />
                 <CustomTextInput
                    style={styles.input}
                    label="Organization"
                    value={organization}
                    onChangeText={text => { setOrganization(text) }}
                />                
                 <CustomTextInput
                    style={styles.input}
                    value={Usertype}
                    label="UserType"                  
                    onChangeText={text =>  setUsertype(text) }
                />
                <Button title="Register" />

                <View style={{ flexDirection: "row", marginTop: 10 , marginBottom:10, justifyContent: "center"}}>
                <Text style={{ color: 'black' }}> Already have an Account?</Text>
                    <TouchableOpacity onPress={handleRegisterPress}>
                        <Text style={styles.link}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      
    },
    wrapper: {
        width: "80%"
    },
    input: {
        marginTop:10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        paddingHorizontal: 14,
        color: "black"
    },
    link: {
        color: "blue"
    }
})

export default RegisterScreen;