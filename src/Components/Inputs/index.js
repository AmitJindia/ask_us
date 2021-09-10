import { TextField } from '@material-ui/core';
import React from 'react';

function Input(props) {
   const {items,onChangeHandler} = props;

   switch (items?.id) {
       case "text":
           return <TextField 
           fullWidth 
           variant="outlined" 
           label={items?.label}
           value={items?.value} 
           onChange={onChangeHandler} 
           error={
            items?.validation?.valid === false &&
            items?.validation?.touched === true
        }/>
       case "password":
           return <TextField 
           fullWidth type="password" 
           variant="outlined" 
           value={items?.value} 
           onChange={onChangeHandler} 
           label={items?.label} 
           error={
            items?.validation?.valid === false &&
            items?.validation?.touched === true
        } />
       default:
           break;
   }

}

export default Input;