import { Box, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import ButtonGenerator from "../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../Components/FieldGenerator/FieldGenerator";
import { form, buttonData } from "./skeleton";

function Register(props) {
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
              justifyContent="flex-end"
              alignItems="center"
            >
              
              <ButtonGenerator data={buttonData} />
            </Grid>
          </span>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;
