import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Echo from './Echo';





 


const Accessllr = () => {
    const [App, setApp] = React.useState('');

    const handleChange = (event) => {
      setApp(event.target.value);
};
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
            
            <div><h2>Access Level List</h2>
            <h6>define & update application access level</h6> </div>
          
          
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
        <TextField id="Model" label="AccessLevelModel" variant="standard"/>   
        <TextField id="Name" label="AccessLevelName" variant="standard" />
        <TextField id="Description" label="AccessLevelDescription" variant="standard" />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">App</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={App}
          onChange={handleChange}
          label="App"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"FireQube"}>FireQube</MenuItem>
          <MenuItem value={"Laravel"}>Laravel</MenuItem>
          
        </Select>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Active"
          labelPlacement="end"
        />
      </FormControl>
    </Box> 
 </AccordionDetails>
</Accordion>
<Echo/>

      
      
       </div>     
       
          </Paper>
          </Box>
          </Container>
        
     
  )
}

export default Accessllr;
