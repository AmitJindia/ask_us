import { Box, Container, Paper, Typography } from '@material-ui/core';
import React from 'react';

function Home(props) {
    return (
        <Container maxWidth="xl">
            <Paper elevation={3} >
                <Box p={3}>
                    <Typography variant="h4" style={{paddingBottom:"10px"}}>Academic Assistance</Typography>
                    <hr></hr>
                    <Typography variant="h6" style={{paddingTop:"10px"}}>Fed up of Tasks and Forthcoming reviews ?</Typography>
                    <Typography paragraph style={{paddingTop:"20px",display:"relative",paddingLeft:"10px"}}>Dont Worry, got your Forthcoming examinations,<br></br>information
                        about the best research project and<br></br>essay lessons and textbook solutions.
                    </Typography>
                </Box>
            </Paper>
            <div style={{marginTop:"50px"}}>
                <Paper elevation={3} >
                    <Box p={3}>
                        <Typography variant="h4" style={{paddingBottom:"10px"}}>Services</Typography>
                        <hr></hr>
                       <ul style={{paddingTop:"10px",display:"flex",justifyContent:"space-evenly"}}>
                           <li>HomeWork</li>
                           <li>Quiz</li>
                           <li>Test</li>
                           <li>Project and research</li>
                           <li>Assistance</li>
                       </ul>
                    </Box>
                </Paper>
            </div>

        </Container>
    );
}

export default Home;