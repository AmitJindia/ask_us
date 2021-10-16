import React from 'react';
import Countdown from "react-countdown";
import { calculateTimeLeft } from './calculateTimeLeft/calculateTimeLeft';

function TimeCountDown(props) {

    const {acceptedOn,sla}=props;

    

    return (
        <Countdown date={Date.now() + calculateTimeLeft(acceptedOn,sla)}/>
    );
}

export default TimeCountDown;