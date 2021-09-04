import { Button } from '@material-ui/core';
import React from 'react';

function Buttons(props) {
    const {data}= props
    return (
        <Button variant="contained" color="primary">{data.label}</Button>
    );
}

export default Buttons;