import { Box, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import FormValidator from "../../../Components/FormValidator/FormValidator";
import SnackBar from "../../../Components/SnackBar";
import { useTemplate } from "../../../context/templateContext";
import { register, registerSelector } from "../../../store/register";
import { form, buttonData, buttonData1 } from "./skeleton";

function Register(props) {
  const {setLoading} = useTemplate();
  const [data, setData] = useState(form);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  const [message, setMessage] = useState("");
  const [postedSeverity, setPostedSeverity] = useState("");
  const [postedSuccess, setPostedSuccess] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const { items, loading, hasErrors } = useSelector(registerSelector)
  const history = useHistory();
  // const history = useHistory();
  const onClickRegister = () => {
    setCheckForm(FormValidator(data, setData));
    setData(FormValidator(data, setData)?.data);
    if (FormValidator(data, setData)?.check) {
      dispatch(register(ref.current.getValues))
    }
  }
  const onClickHandler = () => {
    history.push("/")
  }
  const onChangeHandler = (e, i) => {
    const updatedInputData = data;
    const updatedInputDataElement = updatedInputData[i];
    updatedInputDataElement.value = e.target.value;
    updatedInputData[i] = updatedInputDataElement;
    setData(updatedInputData);
    setDataa(!dataa);
  }
  useEffect(() => {
    if (items.status === 201) {
      setMessage(items.message);
      setPostedSeverity("info")
      setPostedSuccess(true)
      form.map(items => {

        items.value = ""

      })
      setData(form)


    }
    if (hasErrors && items.status === 400) {
      setMessage(items.message);
      setPostedSeverity("error")
      setPostedSuccess(true)
      form.map(items => {

        items.value = ""

      })
      setData(form)

    }
  }, [items])
  useEffect(()=>{
    setLoading(loading)
  },[loading])
  return (
    <Container maxWidth="xs">
        <Paper elevation={3}>
          <Box p={3}>
            <FieldGenerator ref={ref} form={data} onChangeHandler={onChangeHandler} />
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
                justifyContent="flex-start"
                alignItems="center"
              >

                <ButtonGenerator onClick={onClickHandler} data={buttonData1} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >

                <ButtonGenerator onClick={onClickRegister} data={buttonData} />
              </Grid>
            </span>
          </Box>
        </Paper>
        <SnackBar severity={postedSeverity} message={message} show={postedSuccess} setShow={setPostedSuccess} />
    </Container>
  );
}

export default Register;
