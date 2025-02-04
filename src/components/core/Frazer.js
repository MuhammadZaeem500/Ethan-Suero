import React from 'react';
import { Box, Typography } from '@mui/material';

function Frazer() {
    return (
        <Box
            sx={{
                width: '800px',
                height: '1217.39px',
                top: '125.34px',
                position: 'relative', // Allows absolute positioning within this container
            }}
        >
            <Box
                sx={{
                    width: '1200px',
                    height: '650.27px',
                    top: '281.81px',
                    left: '72px',
                    marginLeft: '30px',
                    padding: '2px 0px 0px 0px',
                    border: '2px solid black',
                }}
            >
                <Box
                    sx={{
                        marginTop: '20px',
                        textTransform: 'uppercase',
                        marginLeft: '10px',
                    }}
                >
                    <Typography
                        sx={{
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                        }}
                    >
                        <span style={{ fontWeight: "bold", fontSize: '12px', marginRight: '2px' }}>Name: </span>
                        <span style={{ fontWeight: "300", fontSize: '12px', marginRight: '150px' }}>Frazer Hurrell</span>
                        <span style={{ fontWeight: "bold", fontSize: '12px', marginRight: '2px' }}>ROLE: </span>
                        <span style={{ fontWeight: "300", fontSize: '12px', marginRight: '150px' }}>Creative Technologist</span>
                        <span style={{ fontWeight: "bold", fontSize: '12px', marginRight: '2px' }}>Company: </span>
                        <span style={{ fontWeight: "300", fontSize: '12px', marginRight: '150px' }}>Yahoo!</span>
                        <span style={{ fontWeight: "bold", fontSize: '12px', marginRight: '2px' }}>Project: </span>
                        <span style={{ fontWeight: "300", fontSize: '12px' }}>British Airways</span>
                    </Typography>
                </Box>

                <hr
                    style={{
                        width: '1200px',
                        border: '1.15px solid black',
                    }}
                />

                <Box
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                    }}
                >
                    {/* Image */}
                    <img 
                        src="/images/Frazer-hurrell-p-1080.jpg.svg" 
                        alt="Logo" 
                        style={{ height: '493px', width: '505px', display: 'block' }} 
                    />

                    {/* Text in front of the image */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20px', // Adjust as needed
                            marginLeft: '630px', // Adjust as needed
                            width: '500px',
                            color: 'black', // Text color to contrast against the image
                            marginTop: '150px',
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                            From the initial meeting to the final delivery, Ethan has created a feeling of trust and delivered everything we asked of him. The quality of his work speaks for itself and he is able to execute at a pace. He is an excellent Webflow developer and we will be calling on his services again, very soon.
                        </Typography>
                    </Box>
                </Box>

                <img 
                    src="/images/Quotes.svg.svg" 
                    alt="Quote Icon" 
                    style={{ height: '70px', width: '70px', marginBottom: '400px', marginLeft: '100px' }} 
                />
                <hr
                    style={{
                        width: '1200px',
                        border: '1.15px solid black',
                    }}
                />
                <Box
                    sx={{
                        width: '1200px',
                        display: 'flex', // Make the box a flex container
                        justifyContent: 'space-between', // Space arrows evenly
                        alignItems: 'center',
                    }}
                >
                    <img 
                        src="/images/Arrow-Outline.svg.svg" 
                        alt="Left Arrow" 
                        style={{ height: '50px', width: '59px', marginLeft: '20px' }} 
                    />
                     <span style={{  fontSize: '14.4px', marginRight: '2px' }}>01/04 </span>
                    <img 
                        src="/images/Arrow-Outline.svg.svg" 
                        alt="Right Arrow" 
                        style={{ height: '50px', width: '59px', transform: 'rotate(180deg)', marginRight: '20px' }} 
                    />
                </Box>
     



                <Box
    sx={{
        // margin: '47px 100px',
        marginTop:'200px',
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    {/* Text Section */}
   <Box
   sx={{
    marginRight:'70px'
   }}
   >
     <Typography
        sx={{
            textAlign: 'center', // Optional: center-align the text
            marginBottom: '15px', // Add some spacing between text and logos
            // fontWeight: 'bold',
            fontSize: '12px',
            textTransform:'uppercase'
        }}
    >
        Worked with some of the best out there
    </Typography>
    </Box>
    {/* Logos Section */}
    <Box
        sx={{
            display: 'flex', // Arrange logos in a row
            justifyContent: 'center',
            alignItems: 'center',
            gap: '60px', // Add consistent spacing between logos
            marginTop:'20px'
        }}
    >
        <img
            src="/images/Hunter-Yeany.svg.svg"
            alt="AdFlux Logo"
            style={{ height: '33px', width: '123px',marginLeft:'39px' }}
            />
        <img
            src="/images/Nuu-logo.svg.svg"
            alt="Yahoo Logo"
            style={{ height: '33px', width: '113px',marginLeft:'28px' }}
        />
           <img
            src="/images/yahoo-logo.svg"
            alt="Formul Logo"
            style={{ height: '38px', width: '139px',marginLeft:'28px' }}
            />
        <img
            src="/images/Exponential.svg.svg"
            alt="Formul Logo"
            style={{ height: '34px', width: '143px',marginLeft:'28px' }}
            />
        <img
            src="/images/Group.svg"
            alt="Awwwards Logo"
            style={{ height: '29px', width: '191px',marginLeft:'28px' }}
        />
    </Box>
</Box>




            </Box>
        </Box>
    );
}

export default Frazer;

