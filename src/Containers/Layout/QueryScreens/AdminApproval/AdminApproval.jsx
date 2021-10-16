import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Accordion, AccordionSummary, Typography, AccordionDetails, AccordionActions, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTemplate } from "../../../../context/templateContext";
import FormValidator from "../../../../Components/FormValidator/FormValidator";
import FieldGenerator from "../../../../Components/FieldGenerator/FieldGenerator";
import ButtonGenerator from "../../../../Components/ButtonGenerator/ButtonGenerator";
import { formData, buttonApprove, buttonDeny, buttonReAssign } from "./skeleton";
import axios from "axios";
import { adminapprovalQuery, adminapprovalQuerySelector } from "../../../../store/adminQAApproval";
import moment from "moment";

const AdminApproval = () => {
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
    const { items, loading, hasErrors } = useSelector(adminapprovalQuerySelector)
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
            axios.get(`http://localhost:3002/getAnswers/${panel}`, {
                headers: headers
            }).then(res => res)
                .then(data => {
                    setAnswer(data.data.response);
                })
                .catch(error => console.log(error));
        }

    };
    useEffect(() => {
        axios.get(`http://localhost:3002/getQAForApproval`, {
            headers: headers
        }).then(res => res)
            .then(data => {
                setGetData(data.data.response);
            })
            .catch(error => console.log(error));
    }, [items])


    const onDenyHandler = (e, id) => {
        setID(id)
        setOpen(true)
        setFlag("reject")
    }

    const handleReject = (e) => {

        let data = {};
        data["status"] = "Denied"
        data["time"] = new Date();
        data["qID"] = id;

        dispatch(adminapprovalQuery(data));

        setOpen(false)
    };

    const handleOnAccept = (e, id) => {
        let data = {};
        data["status"] = "Approved";
        data["time"] = new Date();
        data["qID"] = id;
        dispatch(adminapprovalQuery(data));

    };
    const handleClose = () => {
        setOpen(false)

    }



    useEffect(() => {
        setLoading(loading)
    }, [loading])
    return (
        // <Container maxWidth="xl">
        //     <Paper elevation={3}>
        <>
            <div>
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
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                            <Typography variant="p" style={{ fontSize: "smaller" }}>
                                Reviewed By: {items.reviewer.reviewedBy}.
                            </Typography>
                            <Typography variant="p" style={{ fontSize: "smaller" }}>
                                Reviewed On: {moment(items.reviewer.reviewedOn).format("YYYY-MM-DD HH:mm:ss")}.
                            </Typography>
                        </div>

                        <AccordionActions >
                            <ButtonGenerator onClick={(e) => { onDenyHandler(e, items.qID) }} data={buttonDeny} />
                            <ButtonGenerator onClick={(e) => { handleOnAccept(e, items.qID) }} data={buttonApprove} />
                        </AccordionActions >
                    </Accordion>
                })}
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    Are you sure, you want to reject.
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReject} color="primary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    );
}

export default AdminApproval;
