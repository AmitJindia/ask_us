import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import { uuid } from 'uuidv4';
import { useTemplate } from "../../../../context/templateContext";
import FormValidator from "../../../../Components/FormValidator/FormValidator";
import FieldGenerator from "../../../../Components/FieldGenerator/FieldGenerator";
import ButtonGenerator from "../../../../Components/ButtonGenerator/ButtonGenerator";
import { formData, buttonData } from "./skeleton";
import axios from "axios";
import { acceptQuery, acceptQuerySelector } from "../../../../store/acceptQuery";
import Q_A from "./Q_A";
import { Typography } from "@mui/material";


const ResolveQuery = () => {
    const { userEmail, setLoading } = useTemplate();
    const [data, setData] = useState(formData);
    const [dataa, setDataa] = useState(false);
    const [getData, setGetData] = useState([]);
    const [userData, setUserData] = useState();
    const [refreshFlag, setRefreshFlag] = useState(true);
    const dispatch = useDispatch();
    const { items, loading, hasErrors } = useSelector(acceptQuerySelector)
    const ref = useRef();
    const history = useHistory();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    }
    useEffect(() => {
        axios.get(`http://localhost:3002/getNewQueries`, {
            headers: headers
        }).then(res => res)
            .then(data => {
                setGetData(data.data.response);
            })
            .catch(error => console.log(error));
        axios.get(`http://localhost:3002/getUserAcceptedQueries`, {
            headers: headers
        }).then(res => res)
            .then(data => {
                setUserData(data.data.response);
            })
            .catch(error => console.log(error));
    }, [items,refreshFlag])


    const onSubmitHandler = (e, id) => {
        let body = {
            qID: id,
            time: new Date()
        }
        dispatch(acceptQuery(body))
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
    useEffect(() => {
        setLoading(loading)
    }, [loading])
    return (
        <Container maxWidth="xl">
            <Paper elevation={3}>
                <Box p={3}>
                    {getData && (
                        <Paper style={{ marginBottom: "10px" }} elevation={3}>
                            <Box p={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={5}>
                                        <h5>Queries</h5>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <h5>Award</h5>
                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <h5>SLA Time</h5>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <h5>Accept</h5>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    )}
                    {getData?.map((items, index) => {
                        return <Paper style={{ marginBottom: "10px" }} elevation={3}>
                            <Box p={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5} md={5}>
                                        <p>{index + 1}.{items.question}</p>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <p>{items.prize}</p>
                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <p>{items.sla}</p>
                                    </Grid>
                                    <Grid item xs={2} md={2}>
                                        <ButtonGenerator onClick={(e) => { onSubmitHandler(e, items.qID) }} data={buttonData} />
                                    </Grid>
                                </Grid>
                                <div style={{ marginLeft: "5px" }}>
                                    <span style={{ fontWeight: "bold" }}>
                                        Instructions:
                                    </span>
                                    <br></br>
                                    {items.instruction}
                                </div>
                            </Box>
                        </Paper>
                    })}
                    {getData?.length === 0 && (<Paper style={{ marginBottom: "10px" }} elevation={3}>
                        <Box p={2}>
                            <Typography>No Quires</Typography>
                        </Box>
                    </Paper>
                    )}

                </Box>
            </Paper>
            <Q_A userData={userData} setRefreshFlag={setRefreshFlag} refreshFlag={refreshFlag} />
        </Container>
    );
}

export default ResolveQuery;
