import { Grid } from '@material-ui/core';
import React from 'react';
import Input from "../Inputs/index";

const FieldGenerator=(props)=> {
    const { form,onChangeHandler} = props;
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
                            onChangeHandler={(e)=>onChangeHandler(e,index)}
                        />
                    </Grid>
                )) : null}
        </Grid>
    );
}

export default FieldGenerator;