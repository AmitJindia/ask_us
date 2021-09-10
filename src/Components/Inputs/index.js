import { TextField } from '@material-ui/core';
import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
           fullWidth type="input" 
           variant="outlined" 
           value={items?.value} 
           onChange={onChangeHandler} 
           label={items?.label}
           InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon onMouseOver={(e)=>{debugger}} />
              </InputAdornment>
             )
            }} 
           error={
            items?.validation?.valid === false &&
            items?.validation?.touched === true
        } />
       default:
           break;
   }

}

export default Input;