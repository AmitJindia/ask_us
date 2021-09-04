import { Box, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import ButtonGenerator from "../../Components/ButtonGenerator/ButtonGenerator";
import Buttons from "../../Components/Buttons/Buttons";
import FieldGenerator from "../../Components/FieldGenerator/FieldGenerator";
import { form, buttonData, buttonData1 } from "./skeleton";

function Login(props) {
    const history=useHistory();
    const onClickHandler=()=>{
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
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
