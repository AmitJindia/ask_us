import React from 'react';
import  FieldGenerator  from "../Components/FieldGenerator/FieldGenerator";

function Login(props) {
    const form = [
        {
            id: "text",
            label: "Email",
            value: "",
            occupency: { xs: 12, md: 6 },
        },
        {
            id: "text",
            label: "Password",
            value: "",
            occupency: { xs: 12, md: 6 },
        }
    ]
    return (
        <FieldGenerator
            form={form}
        />
    );
}

export default Login;