import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from '@material-ui/icons/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Input(props) {
  const { items, onChangeHandler } = props;
  const [state, setState] = useState("password");
  const onMouseOverHandler = () => {
    setState("input")
  }

  const onMouseOutHandler = () => {
    setState("password")

  }

  switch (items?.id) {
    case "text":
      return <TextField
        fullWidth
        variant="outlined"
        label={items?.label}
        value={items?.value}
        onChange={(e) => {
          onChangeHandler &&
            onChangeHandler(e, items.elementType, items?.inputName);
        }}
        error={
          items?.validation?.valid === false &&
          items?.validation?.touched === true
        } />
    case "password":
      return <TextField
        fullWidth type={state}
        variant="outlined"
        value={items?.value}
        onChange={(e) => {
          onChangeHandler &&
            onChangeHandler(e, items.elementType, items?.inputName);
        }}
        label={items?.label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <VisibilityIcon onClick={(e) => { onMouseOverHandler(e) }} onMouseOut={(e) => { onMouseOutHandler(e) }} />
            </InputAdornment>
          )
        }}
        error={
          items?.validation?.valid === false &&
          items?.validation?.touched === true
        } />
    case "textArea":
      return <TextField
        fullWidth
        multiline
        rows={5}
        variant="outlined"
        label={items?.label}
        value={items?.value}
        onChange={(e) => {
          onChangeHandler &&
            onChangeHandler(e, items.elementType, items?.inputName);
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