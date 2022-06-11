import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { height } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550
}
const Banner = () => {
    return (
        <div>

            <Container sx={{ flexGrow: 1, border: 1 }} style={bannerBg}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left', }}>
                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant='h7' sx={{ fontSize: 14, color: 'gray', }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus.
                            </Typography> <br />

                            <Button variant="contained" style={{ backgroundColor: '#59EBF2' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{ width: '450px' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Banner;