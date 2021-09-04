import { Box, Container, Paper } from '@material-ui/core';
import React from 'react';
import Buttons from '../../Components/Buttons/Buttons';
import FieldGenerator from "../../Components/FieldGenerator/FieldGenerator";
import { form, data } from "./skeleton";

function Login(props) {

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} >
                <Box p={3}>
                    <FieldGenerator
                        form={form}
                    />
                    <span style={{display:"flex",justifyContent:"center",paddingTop:"15px"}}>
                        <Buttons data={data} />
                    </span>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;