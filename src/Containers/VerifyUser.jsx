import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function VerifyUser(props) {
    const [state, setState] = useState("please wait...");
    const { code } = useParams();
    useEffect(() => {
        if (code) {
            axios.get(`http://localhost:3002/verifyUser/${code}`).then(function (response) {
                setState(response?.data.message);
            })
                .catch(function (error) {
                    // handle error
                    setState(error?.response?.data?.message);
                })
        }
    }, [code])

    return (
        <div>
            <h3>
                <strong>            {state}
                </strong>
            </h3>
            {/* <Link to={"/login"}> Please Login
            </Link> */}
        </div >
    );
}

export default VerifyUser;