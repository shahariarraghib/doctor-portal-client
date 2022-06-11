import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { color } from '@mui/system';
import React from 'react';
import exceptionalDental from '../../../../images/ExceptionalDental.jpg'

const ExceptionalDenral = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{ width: '300px' }} src={exceptionalDental} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ textAlign: 'left', }}>
                            <Typography variant='h4' sx={{ my: 5 }}>
                                Exceptional Dental <br /> Care, on Your Terms
                            </Typography>
                            <Typography sx={{ color: 'gray' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque vero dolorem corporis culpa maxime ipsum veritatis quis non nesciunt!
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#59EBF2', }} sx={{ my: 5 }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default ExceptionalDenral;