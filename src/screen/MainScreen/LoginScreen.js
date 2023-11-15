import React, {useContext, useState} from "react";
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    label
} from "react-native";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [focusedField, setFocusedField] = useState(null);
    const [UserName, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [OrgName, setOrganization] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

    const handleRegisterPress = () => {
        navigation.navigate('Register'); // Use navigation object to navigate
    };
   

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const renderLabel = (fieldName, placeholder) => {
        return (
            <Text style={styles.label}>{focusedField === fieldName ? placeholder : ""}</Text>
        );
    };

    return (
        <View style={styles.container}>
            <Spinner visible = {isLoading} />
            <View style={styles.wrapper}>
            {renderLabel("UserName", "UserName")}
                <TextInput
                    style={styles.input}
                    value={UserName}
                    placeholder="Enter your username"  
                    placeholderTextColor="darkgrey"                 
                    onChangeText={text =>  setUsername(text) }
                    onFocus={() => handleFocus("UserName")}
                    onBlur={handleBlur}
                />
                {renderLabel("Password", "Password")}
                <TextInput
                //  style={{ }}
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="darkgrey"
                    value={Password}
                    onChangeText={text => { setPassword(text) }}
                    secureTextEntry
                    onFocus={() => handleFocus("Password")}
                    onBlur={handleBlur}
                />
                {renderLabel("OrgName", "Organization")}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your organization"
                    placeholderTextColor="darkgrey"
                    value={OrgName}
                    onChangeText={text => { setOrganization(text) }}
                    onFocus={() => handleFocus("OrgName")}
                    onBlur={handleBlur}
                />
                <Button title="Login" onPress={() => {login(UserName,Password,OrgName)}}/>

                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "center",}}>
                    <Text style={{ color: 'black' }}> Don't have an account?</Text>
                     <TouchableOpacity onPress={handleRegisterPress}>
                        <Text style={styles.link}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    wrapper: {
        width: "80%"
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        paddingHorizontal: 14,
        color: "black"
    },
    label: {
        marginBottom: 5,
        color: "black",
        
    },
    link: {
        color: "blue"
    }
})

export default LoginScreen;