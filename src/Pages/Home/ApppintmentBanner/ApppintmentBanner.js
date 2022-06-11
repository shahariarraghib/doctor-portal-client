import { Box, Button, Grid, Typography, Container } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png'
import AppointmentBg from '../../../images/appointment-bg.png'



const appointmentBgStyle = {
    background: `url(${AppointmentBg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
}
const ApppintmentBanner = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} style={appointmentBgStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px', }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            textAlign: 'left'
                        }}>
                        <Box>
                            <Typography variant='h6' style={{ color: '#59EBF2' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h6' style={{ color: 'white', fontSize: 12, fontWeight: 300 }}>
                                It is a long established fact that a reader will be distractedby the readable content of a page ehen looking at its
                            </Typography>

                            <Button variant="contained" style={{ backgroundColor: '#59EBF2' }}>Learn More</Button>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default ApppintmentBanner;