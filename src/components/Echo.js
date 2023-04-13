import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Accordion = styled(MuiAccordion)({
  '&.MuiAccordion-root': {
    backgroundColor: 'transparent', // change the background color of the accordion
    boxShadow: 'none', // remove the box-shadow of the accordion
    '&:before': {
      display: 'none', // remove the border of the accordion
    },
    '&.Mui-expanded': {
      margin: 0, // remove the margin when the accordion is expanded
    },
  },
});

const AccordionSummary = styled(MuiAccordionSummary)({
  '&.MuiAccordionSummary-root': {
    backgroundColor: 'transparent', // change the background color of the summary
    marginBottom: -1, // remove the bottom border of the summary
    minHeight: 56, // set the minimum height of the summary
    '&.Mui-expanded': {
      minHeight: 56, // set the height of the summary when it is expanded
    },
    '& .MuiAccordionSummary-content': {
      margin: '12px 0', // change the margin of the summary content
      '& .MuiTypography-root': {
        fontWeight: 'bold', // change the font-weight of the summary title
      },
    },
    '& .MuiIconButton-root': {
      padding: 8, // change the padding of the expand/collapse button
    },
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  '&.MuiAccordionDetails-root': {
    padding: 16, // change the padding of the accordion details
  },
});

export default function Echo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
