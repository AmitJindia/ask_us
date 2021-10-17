import { Grid } from '@material-ui/core';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Input from "../Inputs/index";

const FieldGenerator=forwardRef((props, ref)=> {
    const { form,onChangeHandler} = props;
    const [inputValue, setInputValue] = useState([]);
    const onChange = (e, index, type, id) => {
        if (type === "text" || type === "select" || type === "password") {
            let multiSelectData = {
                ...inputValue,
                [id]: e.target.value,
            };
            debugger
            setInputValue(multiSelectData);
        }
        onChangeHandler(e, index)
    }
    const handleInsertValues = (data) => {
        setInputValue(data);
    }
    useImperativeHandle(ref, () => {
        return {
            getValues: inputValue,
            setValues: handleInsertValues,
        };
    });
    return (
        <Grid container spacing={2} {...props.gridProps}>
            {form?.length
                ? form.map((items,index) =>
                (
                    <Grid
                        item
                        xs={items.occupency.xs}
                        md={items.occupency.md}
                    >
                        <Input
                            items={items}
                            onChangeHandler={(e, type, id) => onChange(e, index, type, id)}
                        />
                    </Grid>
                )) : null}
        </Grid>
    );
})

export default FieldGenerator;