import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box, Container, Grid, Paper, Accordion, AccordionSummary, Typography, AccordionDetails, AccordionActions, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { uuid } from 'uuidv4';
import { useTemplate } from "../../../../context/templateContext";
import FormValidator from "../../../../Components/FormValidator/FormValidator";
import FieldGenerator from "../../../../Components/FieldGenerator/FieldGenerator";
import ButtonGenerator from "../../../../Components/ButtonGenerator/ButtonGenerator";
import { formData, buttonApprove, buttonDeny, buttonReAssign } from "./skeleton";
import axios from "axios";
import { review, reviewSelector } from "../../../../store/reviewQA";
import { DialogContentText } from "@mui/material";

const ReviewQA = () => {
    const { userEmail, setLoading } = useTemplate();
    const [data, setData] = useState(formData);
    const [dataa, setDataa] = useState(false);
    const [getData, setGetData] = useState();
    const [open, setOpen] = useState(false);
    const [id, setID] = useState("");
    const [answer, setAnswer] = useState();
    const [flag, setFlag] = useState("");
    const [userData, setUserData] = useState();
    const [checkForm, setCheckForm] = useState();
    const dispatch = useDispatch();
    const { items, loading, hasErrors } = useSelector(reviewSelector)
    const ref = useRef();
    const history = useHistory();
    const [expanded, setExpanded] = React.useState(false);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    }
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            axios.get(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/getAnswers/${panel}`, {
                headers: headers
            }).then(res => res)
                .then(data => {
                    setAnswer(data.data.response);
                })
                .catch(error => console.log(error));
        }

    };
    useEffect(() => {
        axios.get(`https://askus-servic-main-aegoakmtmi7q.herokuapp.com/getQAForReview`, {
            headers: headers
        }).then(res => res)
            .then(data => {
                setGetData(data.data.response);
            })
            .catch(error => console.log(error));
    }, [items])


    // const onSubmitHandler = (e, id) => {
    //     let body = {
    //         qID: id,
    //         time: new Date()
    //     }
    //     dispatch(acceptQuery(body))
    // }
    const onDenyHandler = (e, id) => {
        setID(id)
        setOpen(true)
        setFlag("reject")
    }
    const onReOpenHandler = (e, id) => {
        setID(id)
        setOpen(true)
        setFlag("reopen")

    }
    const handleReject = (e) => {
        setCheckForm(FormValidator(data, setData));
        setData(FormValidator(data, setData)?.data);
        if (FormValidator(data, setData)?.check) {
            let data = ref.current.getValues;
            data["status"] = "Denied"
            data["time"] = new Date();
            data["qID"] = id;

            dispatch(review(data));
        }
        setOpen(false)
    };
    const handleReopen = (e) => {
        setCheckForm(FormValidator(data, setData));
        setData(FormValidator(data, setData)?.data);
        if (FormValidator(data, setData)?.check) {
            let data = ref.current.getValues;
            data["status"] = "ReOpen"
            data["time"] = new Date();
            data["qID"] = id;

            dispatch(review(data));
        }
        setOpen(false)

    };
    const handleOnAccept = (e, id) => {
        let data = {};
        data["status"] = "Approved";
        data["time"] = new Date();
        data["qID"] = id;
        dispatch(review(data));

    };
    const handleClose = () => {
        setOpen(false)

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
    return (<>
       
        <Container maxWidth="xl">
        <Paper
            elevation={3}
            className="paper-rounded"
            style={{ backgroundColor: "#faf7f7" }}
            style={{ marginTop: "20px" }}
        >
            <Box style={{ marginLeft: "22px", paddingTop: "10px", paddingBottom: "10px" }}>
                <Typography variant="h6">Review Queries</Typography>
            </Box>
        </Paper>
            <Paper elevation={3} className="paper-rounded">
                <Box p={3}>
                    {getData?.map((items, index) => {
                        return <Accordion expanded={expanded === items.qID} onChange={handleChange(items.qID)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography style={{ width: '2%', flexShrink: 0 }}>
                                    {index + 1}.
                                </Typography>
                                <Typography styl={{ color: 'text.secondary' }}>{items.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {answer?.answer}
                                </Typography>
                            </AccordionDetails>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <ButtonGenerator onClick={(e) => { onReOpenHandler(e, items.qID) }} data={buttonReAssign} />
                                <AccordionActions >
                                    <ButtonGenerator onClick={(e) => { onDenyHandler(e, items.qID) }} data={buttonDeny} />
                                    <ButtonGenerator onClick={(e) => { handleOnAccept(e, items.qID) }} data={buttonApprove} />
                                </AccordionActions >
                            </div>
                        </Accordion>
                    })}
                    {getData?.length === 0 && (<Paper style={{ marginBottom: "10px" }} elevation={3}>
                        <Box p={2}>
                            <Typography>No Quires for Review</Typography>
                        </Box>
                    </Paper>
                    )}
                </Box>
                <Dialog
                    fullWidth="true"
                    maxWidth="md"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <FieldGenerator
                            ref={ref}
                            form={data}
                            onChangeHandler={onChangeHandler} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={flag === "reopen" ? handleReopen : handleReject} color="primary">
                            Confirm
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Container>
    </>
    );
}

export default ReviewQA;
