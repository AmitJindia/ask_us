import React from 'react';
import Buttons from '../Buttons/Buttons';

function ButtonGenerator(props) {
    return (
        <Buttons onClick={props.onClick} data={props.data} />
    );
}

export default ButtonGenerator;