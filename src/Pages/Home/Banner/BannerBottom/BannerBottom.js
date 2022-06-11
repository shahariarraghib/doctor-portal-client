import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const BannerBottom = () => {
    return (
        <div>

            <Container >
                <Box sx={{ flexGrow: 1, }} style={{ marginTop: '-50px', }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4} >
                            <Box style={{ backgroundColor: '#59EBF2', display: 'flex', height: 120, borderRadius: 5, alignItems: "center", justifyContent: "center", }}>
                                <AccessTimeIcon sx={{ fontSize: 80, color: 'white' }}></AccessTimeIcon>
                                <Box sx={{ color: 'white', padding: 3, textAlign: 'left' }}>
                                    <Typography>
                                        Opening Hours
                                    </Typography>
                                    <Typography>
                                        24/7 Service
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box style={{ backgroundColor: '#444B4B', display: 'flex', height: 120, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
                                <EditLocationAltIcon sx={{ fontSize: 80, color: 'white' }}></EditLocationAltIcon>
                                <Box sx={{ color: 'white', padding: 3, textAlign: 'left' }}>
                                    <Typography>
                                        Visit Our Location
                                    </Typography>
                                    <Typography>
                                        Tejgaon, Dhaka-1208
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4}>
                            <Box style={{ backgroundColor: '#59EBF2', display: 'flex', height: 120, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
                                <PhoneInTalkIcon sx={{ fontSize: 80, color: 'white' }}></PhoneInTalkIcon>
                                <Box sx={{ color: 'white', padding: 3, textAlign: 'left' }}>
                                    <Typography>
                                        Contact Us Now
                                    </Typography>
                                    <Typography>
                                        +8801689797288
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div >
    );
};

export default BannerBottom;