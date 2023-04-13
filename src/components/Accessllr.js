import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';


const Accessllr = () => {
  return (
    <Container >
      <Box >
          <Paper elevation={6}>
            <div>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Access Level List</h2>
          {/* <h6>define & update application access level</h6> */}
          </AccordionSummary>
        <AccordionDetails>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="Model" label="AccessLevelModel" variant="standard" />   
        <TextField id="Name" label="AccessLevelName" variant="standard" />
        <TextField id="Description" label="AccessLevelDescription" variant="standard" />

        </Box>



       
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
        </AccordionDetails>
      </Accordion>
      
      
       </div>     
       
          </Paper>
          </Box>
          </Container>
        
     
  )
}

export default Accessllr;
