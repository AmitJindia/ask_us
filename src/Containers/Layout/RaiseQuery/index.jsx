import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import { formData, buttonData, buttonData1 } from "./skeleton";
import FormValidator from "../../../Components/FormValidator/FormValidator";
import { useTemplate } from "../../../context/templateContext";
import { uuid } from 'uuidv4';
import { query, querySelector } from "../../../store/query";


const Query = () => {
  const { userEmail,setLoading } = useTemplate();
  const [data, setData] = useState(formData);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  const dispatch = useDispatch();
  const { items, loading, hasErrors } = useSelector(querySelector)
  const ref = useRef();
  const [error, setError] = useState("");
  const history = useHistory();
  const onSubmitHandler = () => {
    setCheckForm(FormValidator(data, setData));
    setData(FormValidator(data, setData)?.data);
    if (FormValidator(data, setData)?.check) {
     let formdata=ref.current.getValues
     formdata.qID = uuid();
     formdata.createdBy = userEmail;
     formdata.createdOn = new Date();

      dispatch(query(formdata));
    }
  }
  const onClickHandler = () => {
    // history.push("/register")
  }
  const onChangeHandler = (e, i) => {
    const updatedInputData = data;
    const updatedInputDataElement = updatedInputData[i];
    updatedInputDataElement.value = e.target.value;
    updatedInputData[i] = updatedInputDataElement;
    setData(updatedInputData);
    setDataa(!dataa);
  }
  useEffect(async () => {
    // if (items.status === 200) {
    //   sessionStorage.setItem("token", items.token)
    //   const data = await tokenDecode(items?.token);
    //   setLogin(true);
    //   setUserEmail(data.email);
    //   setUserRole(data?.role);
    //   setUserName(data?.name);
    // }
    // if (hasErrors) {
    //   setError(items.message)
    // }
  }, [items])
  useEffect(()=>{
    setLoading(loading)
  },[loading])
  return (
    <Container maxWidth="xl">
       <Paper
            elevation={3}
            className="paper-rounded"
            style={{ backgroundColor: "#faf7f7" }}
            style={{ marginTop: "20px" }}
        >
            <Box style={{ marginLeft: "22px", paddingTop: "10px", paddingBottom: "10px" }}>
                <Typography variant="h6">Raise Query</Typography>
            </Box>
        </Paper>
            <Paper elevation={3} className="paper-rounded">
        <Box p={3}>
          <FieldGenerator
            ref={ref}
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
              justifyContent="flex-end"
              alignItems="center"
            >
              <ButtonGenerator onClick={onClickHandler} data={buttonData1} />
              <ButtonGenerator onClick={onSubmitHandler} data={buttonData} />
            </Grid>
          </span>
        </Box>
      </Paper>
    </Container>
  );
}

export default Query;
