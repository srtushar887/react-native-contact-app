import React, { useState } from "react";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
const Login = () => {
    const [value, onChangeText] = useState('');
    return (
        <LoginComponent />
    )
};

export default Login;