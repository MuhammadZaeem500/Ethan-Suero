import React from 'react';
import { Box, Typography } from '@mui/material';

function Clients() {
    return (
        <Box
            sx={{
                width: '600px',
                height: '1300.2px',
                top: '1652.83px',
                marginLeft:'350px'
                // alignContent:'left',


            }}>
            <Box
                sx={{
                    display: 'flex', // Flexbox for horizontal alignment
                    alignItems: 'center', // Align items vertically in the center
                    justifyContent: 'center', // Center items horizontally
                    width: '100%',
                    maxWidth: '1440px',
                    margin: '150px auto',
                    position: 'relative',
                    gap: '20px', // Space between image and text

                }}
            >


                {/* Text Content */}
                <Box
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            mb: 1,
                        }}
                    >
                        Houston Exponential
                    </Typography>
                    <Box
                        sx={{
                            width: '270px',
                            marginLeft: '10px',
                        }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '1.5',
                                maxWidth: '400px',
                                // fontFamily: 'Inter',
                                // fontWeight: 500,
                                // lineHeight: '0',
                                // fontSize: '10px',
                                textAlign: 'left',
                            }}
                        >
                            A new digital HUB for Houston’s biggest startup ecosystem.
                        </Typography>
                    </Box>
                </Box>
                {/* Logo */}
                <Box
                    sx={{
                        position: 'relative', // Ensure it's in the flow of the flex container
                        zIndex: 2,
                        marginLeft: '150px',
                    }}
                >
                    <img
                        src="/images/div.svg"
                        alt="Logo"
                        style={{
                            width: '583.19px',
                            height: '259.19px',
                            left: '583.19px',

                        }}
                    />
                </Box>
            </Box>



            <Box
                sx={{
                    display: 'flex', // Flexbox for horizontal alignment
                    alignItems: 'center', // Align items vertically in the center
                    justifyContent: 'center', // Center items horizontally
                    width: '100%',
                    maxWidth: '1440px',
                    margin: '150px auto',
                    position: 'relative',
                    gap: '20px', // Space between image and text

                }}
            >


                {/* Logo */}
                <Box
                    sx={{
                        position: 'relative', // Ensure it's in the flow of the flex container
                        zIndex: 2,
                        // marginright: '2000px',
                    }}
                >
                    <img
                        src="/images/div1.svg"
                        alt="Logo"
                        style={{
                            width: '583.19px',
                            height: '259.19px',
                        }}
                    />
                </Box>
                
                {/* Text Content */}
                <Box
                    sx={{
                        textAlign: 'left',
                        marginLeft:'100px',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            mb: 1,
                        }}
                    >
                      Nami ml
                    </Typography>
                    <Box
                        sx={{
                            width: '270px',
                            marginLeft: '10px',
                        }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '1.5',
                                maxWidth: '400px',
                                // fontFamily: 'Inter',
                                // fontWeight: 500,
                                // lineHeight: '0',
                                // fontSize: '10px',
                                textAlign: 'left',
                            }}
                        >
                            A brand new digital identity and website for the subscription App service that focuses on happy subscribers.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex', // Flexbox for horizontal alignment
                    alignItems: 'center', // Align items vertically in the center
                    justifyContent: 'center', // Center items horizontally
                    width: '100%',
                    maxWidth: '1440px',
                    margin: '150px auto',
                    position: 'relative',
                    gap: '20px', // Space between image and text

                }}
            >


                {/* Text Content */}
                <Box
                    sx={{
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            mb: 1,
                        }}
                    >
                       thin reel
                    </Typography>
                    <Box
                        sx={{
                            width: '270px',
                            marginLeft: '10px',
                        }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '1.5',
                                maxWidth: '400px',
                                // fontFamily: 'Inter',
                                // fontWeight: 500,
                                // lineHeight: '0',
                                // fontSize: '10px',
                                textAlign: 'left',
                            }}
                        >
                            How we turned a local studio into one of the biggest video agencies in the south of the UK.
                        </Typography>
                    </Box>
                </Box>
                {/* Logo */}
                <Box
                    sx={{
                        position: 'relative', // Ensure it's in the flow of the flex container
                        zIndex: 2,
                        marginLeft: '150px',
                    }}
                >
                    <img
                        src="/images/div2.svg"
                        alt="Logo"
                        style={{
                            width: '583.19px',
                            height: '259.19px',
                            left: '583.19px',

                        }}
                    />
                </Box>
            </Box>




        </Box>
    );
}

export default Clients;
