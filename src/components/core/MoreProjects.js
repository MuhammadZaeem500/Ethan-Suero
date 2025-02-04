import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Projects() {
    return (
        <Box
            sx={{
                width: '600px',
                height: '100.52px',
                display: 'flex', // Flexbox layout
                alignItems: 'center', // Align items vertically in the center
                justifyContent: 'flex-start', // Align items horizontally to the left
                // gap: '20px', // Space between element
                boxSizing: 'border-box',
            }}
        >
            {/* First Typography */}
            <Typography
                sx={{
                    width: '128px', // Adjusts width to fit content
                    height: '17px', // Adjusts height to fit content
                    fontSize: '12px', // Adjust font size as needed
                    fontWeight: 500,
                    marginLeft:'50px',
                    
                }}
            >
                MORE PROJECTS
            </Typography>

            {/* Second Typography */}
            <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                marginTop:'240px',
            }}
            >
            <Box
            sx={{
                // marginTop:'80px'
            }}>
                <hr style={{ 
                    marginLeft: '300px',
                     alignItems:'right',
                     width:'800px',
                     opacity:'0.3'

                     
                     }} />
            <Typography variant="h1"
                sx={{
                    width: '794px', // Adjusts width to fit content
                    height: '70px', // Adjusts height to fit content
                    fontSize: '70px', // Same font size as the first Typography for alignment
                    fontWeight: 500,
                    textAlign:'right',
                    letterSpacing:'0.08em',
                    marginLeft:'80px'
                }}
            >
                HUNTER YEANY
            </Typography>
            </Box>
            <Box
            sx={{
                // marginTop:'80px'
            }}>
                <hr style={{ 
                    // border: '1px solid black',
                      marginLeft: '300px',
                     alignItems:'right',
                     width:'800px',
                     opacity:'0.3'

                     
                     }} />
            <Typography variant="h1"
                sx={{
                    width: '794px', // Adjusts width to fit content
                    height: '70px', // Adjusts height to fit content
                    fontSize: '70px', // Same font size as the first Typography for alignment
                    fontWeight: 500,
                    textAlign:'center',
                    marginLeft:'60px',
                    letterSpacing:'0.08em',
                    

                }}
            >
                VELOCE
            </Typography>
            </Box>
            <Box
            sx={{
                // marginTop:'80px'
            }}>
                <hr style={{ 
                    // border: '1px solid black',
                      marginLeft: '300px',
                     alignItems:'right',
                     width:'800px',
                     opacity:'0.3'

                     
                     }} />
            <Typography variant="h1"
                sx={{
                    width: '794px', // Adjusts width to fit content
                    height: '70px', // Adjusts height to fit content
                    fontSize: '70px', // Same font size as the first Typography for alignment
                    letterSpacing:'0.08em',
                    fontWeight: 500,
                    textAlign:'center',
                    marginLeft:'60px',
               
                }}
            >
                WALKER
            </Typography>
            <hr style={{ 
                    // border: '1px solid black',
                      marginLeft: '300px',
                     alignItems:'right',
                     width:'800px',
                     opacity:'0.3'

                     
                     }} />
                     </Box>
            </Box>
        </Box>
    );
}

export default Projects;