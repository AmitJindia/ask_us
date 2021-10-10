import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box, Container, Grid, Paper, useEventCallback } from "@material-ui/core";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import { formData, buttonData, buttonData1 } from "./skeleton";
import GoogleLogin from 'react-google-login';
import FormValidator from "../../../Components/FormValidator/FormValidator";
import { login, loginSelector } from "../../../store/login";
import { tokenDecode } from "../../../util/token-decode";
import { useTemplate } from "../../../context/templateContext";


const Login = () => {
  const { setLogin, setUserName, setUserEmail, setUserRole,setLoading } = useTemplate();
  const [data, setData] = useState(formData);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  const dispatch = useDispatch();
  const { items, loading, hasErrors } = useSelector(loginSelector)
  const ref = useRef();
  const [error, setError] = useState("");
  const history = useHistory();
  const onClickLogin = () => {
    setCheckForm(FormValidator(data, setData));
    setData(FormValidator(data, setData)?.data);
    if (FormValidator(data, setData)?.check) {
      dispatch(login(ref.current.getValues));
    }
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

  const responseGoogle = (response) => {
    // axios({
    //   method:"post",
    //   url:"http://localhost:3002/googlelogin",
    //   data:{tokenID:response.tokenId}
    // }).then(response=>{
    //   console.log(response)
    // })
  }
  useEffect(async () => {
    if (items.status === 200) {
      sessionStorage.setItem("token", items.token)
      const data = await tokenDecode(items?.token);
      setLogin(true);
      setUserEmail(data.email);
      setUserRole(data?.role);
      setUserName(data?.name);
    }
    if (hasErrors) {
      setError(items.message)
    }
  }, [items])
  useEffect(()=>{
    setLoading(loading)
  },[loading])
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <Box p={3}>
          <FieldGenerator
            ref={ref}
            form={data}
            onChangeHandler={onChangeHandler}
          />
          <span style={{ color: "red" }}>{error}</span>
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
              onSuccess={responseGoogle}
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
