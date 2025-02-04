import React from 'react';
import { Box, Typography } from '@mui/material';

function Humble() {

    const renderEntry = (text) => (
        <Box sx={{
            width: '200px',
            marginBottom: '20px',
            textAlign: 'left',
            textTransform: 'uppercase'
        }}>
            <Typography variant="body1" sx={{ fontSize: '10px', fontWeight: 500, textAlign: 'center' }}>
                {text}
            </Typography>
        </Box>
    );

    const renderContentSection = (entries) => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'right',
                alignItems: 'right',
                textAlign: 'right',
                marginTop: '20px',
                width: '100%',
                marginLeft: '300px',
            }}
        >
            {entries.map((entry) => renderEntry(entry))}
        </Box>
    );

    return (
        <Box sx={{ width: '1000px', height: '1365.16px' }}>
            {/* Title Section */}
            <Box sx={{ marginTop: '350px', marginLeft: '430px' }}>
                <Typography
                    variant="h1"
                    sx={{
                        width: '794px',
                        height: '70px',
                        fontSize: '100px',
                        fontWeight: 500,
                        textAlign: 'left',
                        marginLeft: '40px',
                        lineHeight: '0.75',
                        textTransform: 'uppercase'
                    }}
                >
                    HUMBLE
                    <br /> BAG
                </Typography>
                <Box sx={{ marginLeft: '250px', marginTop: '60px' }}>
                    <Typography sx={{ fontSize: '10px' }}>
                        I WON SOME AWARDS
                        <br />ALONG THE WAY
                    </Typography>
                </Box>
            </Box>

            {/* Image Section */}
            <Box
                sx={{
                    margin: '47px 100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src="/images/thinreel-ux-p-800.jpeg.svg"
                    alt="Logo"
                    style={{
                        height: '245px',
                        width: '185px',
                        marginRight: '10px',
                        marginLeft: '300px',
                        marginTop: '100px',
                    }}
                />
                <img
                    src="/images/thinreel-ui-1-p-500.webp.svg"
                    alt="Logo"
                    style={{ height: '245px', width: '185px', marginRight: '10px' }}
                />
                <img
                    src="/images/certificate-houston-exponential-hm-p-500.webp.svg"
                    alt="Logo"
                    style={{
                        height: '245px',
                        width: '185px',
                        marginRight: '10px',
                        marginTop: '100px',
                    }}
                />
                <img
                    src="/images/thinreel-innovation-p-800.jpeg.svg"
                    alt="Logo"
                    style={{ height: '245px', width: '185px', marginRight: '10px' }}
                />
                <img
                    src="/images/thinreel-ux-p-800.jpeg.svg"
                    alt="Logo"
                    style={{
                        height: '245px',
                        width: '185px',
                        marginRight: '10px',
                        marginTop: '100px',
                    }}
                />
                <img
                    src="/images/thinreel-ui-1-p-500.webp.svg"
                    alt="Logo"
                    style={{ height: '245px', width: '185px', marginRight: '10px' }}
                />
                <img
                    src="/images/certificate-houston-exponential-hm-p-500.webp.svg"
                    alt="Logo"
                    style={{
                        height: '245px',
                        width: '185px',
                        marginRight: '10px',
                        marginTop: '100px',
                    }}
                />
            </Box>

            {/* Content Sections Below the Images */}
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '240px' }}>

                <Box>
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'HOUSTON EXPONENTIAL',
                        'AWWARDS',
                        'HONORS',
                        '2022'
                    ])}
                </Box>

                <Box>
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'HOUSTON EXPONENTIAL',
                        'css design awards',
                        'ui / ux / innovation',
                        '2022'
                    ])}
                </Box>

                <Box>
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'atomle',
                        'awwwards',
                        'nominee',
                        '2021'
                    ])}
                </Box>

                <Box >
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'atomle',
                        'css design awards',
                        'ui / ux / innovation',
                        '2021'
                    ])}
                </Box>

                <Box>
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'Thin reel media',
                        'awwwards',
                        'nominee',
                        '2021'
                    ])}
                </Box>

                <Box sx={{
                    //  marginTop: '80px' 
                }}>
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                    {renderContentSection([
                        'Thin reel media',
                        'css design awards',
                        'UI / UX / Innovation',
                        '2022'
                    ])}
                    <hr
                        style={{
                            marginLeft: '540px',
                            // alignItems: 'left',
                            width: '680px',
                            opacity: '0.3',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Humble;
