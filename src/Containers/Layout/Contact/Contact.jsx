import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

function Contact(props) {
    return (
        <div style={{ background: "#000" }}>
            <Paper>
                <Typography variant="h2" color="primary" style={{ display: "flex", justifyContent: "center" }}>Contact</Typography>
                <div style={{display:"flex",justifyContent: "space-around"}}>
                <div>
                    <Typography variant="subtitle2" style={{ color: "#959696", fontFamily: "Lucida Sans Typewriter" }}>FOLLOW US</Typography>
                    <ul style={{ listStyle: "none" }}>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Google</li>
                        <li>Whatsapp</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div>
                    <Typography variant="subtitle2" style={{ color: "#959696", fontFamily: "Lucida Sans Typewriter" }}>GERENAL CONTACTS</Typography>
                    <Typography variant="h6" >goyalassociation@gmail.com</Typography>
                    <Typography variant="subtitle1" >(91) 9023236551</Typography>
                </div>
                </div>

            </Paper>
        </div>
    );
}

export default Contact;