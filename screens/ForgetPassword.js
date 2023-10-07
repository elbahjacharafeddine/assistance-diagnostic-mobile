import React, {useState} from "react";
import {Text, View} from "react-native";

const ForgetPassword =() =>{
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [message, setMessage ] = useState()

    return(
        <View>
            <Text>forget password</Text>
        </View>
    )
}
export default ForgetPassword;