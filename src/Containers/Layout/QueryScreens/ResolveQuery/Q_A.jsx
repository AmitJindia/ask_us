import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import ButtonGenerator from "../../../../Components/ButtonGenerator/ButtonGenerator";
import FieldGenerator from "../../../../Components/FieldGenerator/FieldGenerator";
import { formData, buttonData, buttonData1 } from "./skeleton";
import FormValidator from "../../../../Components/FormValidator/FormValidator";
import { useTemplate } from "../../../../context/templateContext";
import "../../../../App.css"
import TimeCountDown from "../../../../Components/TimeCountDown/TimeCountDown";
import { calculateTimeLeft } from "../../../../Components/TimeCountDown/calculateTimeLeft/calculateTimeLeft";
import { postAnswer, postAnswerSelector } from "../../../../store/postAnswers";



const Q_A = (props) => {
  const {setRefreshFlag,refreshFlag}=props
  const { userEmail, setLoading } = useTemplate();
  const [data, setData] = useState(formData);
  const [dataa, setDataa] = useState(false);
  const [checkForm, setCheckForm] = useState();
  const [getData, setGetData] = useState([]);
  const dispatch = useDispatch();
  const { items, loading, hasErrors } = useSelector(postAnswerSelector)
  const ref = useRef();
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    setGetData(props.userData)
  }, [props.userData])
  const onSubmitHandler = (e, values) => {
    setCheckForm(FormValidator(data, setData));
    setData(FormValidator(data, setData)?.data);
    if (FormValidator(data, setData)?.check) {
      let formdata = ref.current.getValues
      debugger
      formdata.qID = values.qID;
      formdata.submittedBy = userEmail;
      formdata.submittedOn = new Date();
      formdata.slaTime = calculateTimeLeft(values.acceptedOn, values.sla) <= 0 ? "breached" : "in-Time";
      dispatch(postAnswer(formdata));
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
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  }

  useEffect(() => {
    setRefreshFlag(!refreshFlag)
  }, [items])


  useEffect(() => {
    setLoading(loading)
  }, [loading])
  return (
    <>
      <Paper
        elevation={3}
        className="paper-rounded"
        style={{ backgroundColor: "#faf7f7" }}
        style={{ marginTop: "20px" }}
      >
        <Box style={{ marginLeft: "22px", paddingTop: "10px", paddingBottom: "10px" }}>
          <Typography variant="h6">Assigned Queries</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} className="paper-rounded">
        <Box p={3}>
          {getData?.map((items, index) => {
            return (
              <>
                <Grid container direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}>
                  <Grid item xs={9} md={9}>
                    <h5 style={{ fontSize: "medium" }}>{index + 1}. {items.question}</h5>
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <h5>Time Left: <TimeCountDown acceptedOn={items.user.acceptedOn} sla={items.sla} submittedTime={items.submittedOn} />
                    </h5>
                  </Grid>
                </Grid>
                <FieldGenerator
                  ref={ref}
                  form={data}
                  onChangeHandler={onChangeHandler}
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  style={{ marginTop: "10px" }}
                >
                  {/* <ButtonGenerator onClick={onClickHandler} data={buttonData1} /> */}
                  <ButtonGenerator onClick={(e) => { onSubmitHandler(e, items) }} data={buttonData} />
                </Grid>
              </>
            )
          })}
          {getData?.length === 0 && (<Paper style={{ marginBottom: "10px" }} elevation={3}>
            <Box p={2}>
              <Typography>No Assigned Quires</Typography>
            </Box>
          </Paper>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default Q_A;
