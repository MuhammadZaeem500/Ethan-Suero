import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FAQAccordion from './Accordian.js';

function Common() {
    return (
        <Box
            sx={{
                height: '170px',
                width: '907px',
                marginLeft: '500px',
                marginTop:'125px',
                
                // textAlign:'center',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    lineHeight: '0',
                }}
                aria-label="Home"
            >
                common
              

            </Typography>
        


             <Box sx={{ marginLeft: '485px',}}> 
                    <Typography sx={{ fontSize: '10px',textTransform:'uppercase' }}>Some questions </Typography>
                    <Typography sx={{ fontSize: '10px',textTransform:'uppercase' }}> PEOPLE USUALLY ASK</Typography>
                </Box>





            
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    lineHeight: '1',
                    
                }}
                aria-label="Work"
            >
                Questions
            </Typography>
            <FAQAccordion/>
            

            <Box
                sx = {{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '200px'
                }}
            >

            </Box>
        </Box>

    );
}

export default Common;
