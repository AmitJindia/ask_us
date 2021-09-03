import { Grid } from '@material-ui/core';
import React from 'react';
import Input from "../Inputs/index";

function FieldGenerator(props) {
    const { form } = props;
    return (
        <Grid container spacing={2} {...props.gridProps}>
            {form.length
                ? form.map(items =>
                (
                    <Grid
                        item
                        xs={items.occupency.xs}
                        md={items.occupency.md}
                    >
                        <Input
                            items={items}
                        />
                    </Grid>
                )) : null}
        </Grid>
    );
}

export default FieldGenerator;