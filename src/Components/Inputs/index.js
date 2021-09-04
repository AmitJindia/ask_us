import { TextField } from '@material-ui/core';
import React from 'react';

function Input(props) {
   const {items} = props;

   switch (items?.id) {
       case "text":
           return <TextField fullWidth variant="outlined" label={items?.label} value={items?.value}/>
   
       default:
           break;
   }

}

export default Input;