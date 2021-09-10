import { Button } from '@material-ui/core';
import React from 'react';

function Buttons(props) {
    const {data,onClick}= props

    switch (data.variant) {
        case "contained":
            return <Button variant="contained" onClick={onClick} color="primary">{data.label}</Button>
        case "notContained":
            return <Button color="primary" onClick={onClick} >{data.label}</Button>    
        default:
            break;
    }
}

export default Buttons;