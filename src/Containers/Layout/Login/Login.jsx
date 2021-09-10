import { Box, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import { form, buttonData, buttonData1 } from "./skeleton";
import GoogleLogin from 'react-google-login';

function Login(props) {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/register")
  }
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <FieldGenerator form={form} />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "15px",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <ButtonGenerator onClick={onClickHandler} data={buttonData1} />
              <ButtonGenerator data={buttonData} />
            </Grid>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "15px",
            }}
          >
            <GoogleLogin
              clientId="337329766423-qn6o3j8jig2l3vprcm93m6n88ho302lj.apps.googleusercontent.com"
              buttonText="Login with Google"
              // onSuccess={responseGoogle}
              // onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </span>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
