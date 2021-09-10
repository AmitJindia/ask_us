import { Box, Container, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ButtonGenerator from "../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../Components/FieldGenerator/FieldGenerator";
import FormValidator from "../../../Components/FormValidator/FormValidator";
import { form, buttonData } from "./skeleton";

function Register(props) {
  const [data, setData] = useState(form);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  const history=useHistory();
  const onClickRegister=()=>{
      setCheckForm(FormValidator(data, setData));
      setData(FormValidator(data, setData)?.data);
          if (FormValidator(data, setData)?.check) {}
    }
  const onClickHandler=()=>{
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
          <FieldGenerator form={data} onChangeHandler={onChangeHandler}/>
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
              
              <ButtonGenerator onClick={onClickRegister} data={buttonData} />
            </Grid>
          </span>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;
