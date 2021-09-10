import React, {useState, useEffect  } from "react";
import { useHistory } from "react-router";
import { Box, Container, Grid, Paper, useEventCallback } from "@material-ui/core";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import { formData, buttonData, buttonData1 } from "./skeleton";
import GoogleLogin from 'react-google-login';
import FormValidator from "../../../Components/FormValidator/FormValidator";


const Login=()=> {
  const [data, setData] = useState(formData);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  
  const history = useHistory();
  const onClickLogin=()=>{
    setCheckForm(FormValidator(data, setData));
    setData(FormValidator(data, setData)?.data);
        if (FormValidator(data, setData)?.check) {}
  }
  const onClickHandler = () => {
    history.push("/register")
  }
  const onChangeHandler = (e, i) => {
    const updatedInputData = data;
    const updatedInputDataElement = updatedInputData[i];
    updatedInputDataElement.value = e.target.value;
    updatedInputData[i] = updatedInputDataElement;
    setData(updatedInputData);
    setDataa(!dataa);
  }
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <FieldGenerator
            form={data}
            onChangeHandler={onChangeHandler}
          />
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
              <ButtonGenerator onClick={onClickLogin} data={buttonData} />
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
