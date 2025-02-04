import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <Box
            sx={{
                display: 'block',
                height:'441px',
                width:'600px',
                marginLeft: '300px',
                marginTop: '200px',
                gap: 2, 
                fontFamily:'inter'
            }}
        >
            <Box
                sx={{
                    position: 'Absolute',
                    // display: 'flex',
                    marginLeft:'250px',
                    height: '17px',
                     width: '53px',
                    boxSizing:'border-box'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '10px',
                        fontWeight: 500,
                        lineHeight: '32px',
                        letterSpacing: '0.5px',
                        textAlign: 'left',
                        textTransform: 'uppercase', // Optional: Make "About" all caps
                    }}
                >
                    About
                </Typography>
                </Box>
                <Box
                sx={{
                    position: 'Absolute',
                    // display: 'flex',
                    marginLeft:'350px',
                    // height:'441px',
                    // width:'600px',
                    boxSizing:'border-box'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '38px',
                        fontWeight: 400,
                        lineHeight: '40px',
                        textAlign: 'left',
                        
                       
                    }}
                >
                    Ethan Suero is an independent</Typography></Box>
                    <Box
                       sx={{
                        position: 'Absolute',
                        // display: 'flex',
                        marginLeft:'200px',
                        marginTop:'40px',
                        height:'550px',
                        width:'740px',
                        // boxSizing:'border-box',
                        wordSpacing:'5px'
                    }}
                    >
                        <Typography
                         sx={{
                            fontFamily: 'inter',
                            fontSize: '38px',
                            fontWeight: 400,
                            lineHeight: '40px',
                            textAlign: 'left',
                            
                           
                        }}
                        >
                        designer focused on crafting immersive digital experiences. He believes every project is an opportunity to deliver a unique and memorable digital experience that delights users and builds brand equity.
                        </Typography>
                    </Box>
            
        </Box>
    );
}

export default About;
