import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../../images/chair.png'
import Calander from '../../../Shared/Calender/Calander';
import bga from '../../../../images/bg.png'

const bannerBga = {
    background: `url(${bga})`

}


const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box style={bannerBga}>
            <Container >
                <Box sx={{ flexGrow: 1, mt: 5 }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} >
                            <Calander date={date} setDate={setDate}></Calander>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <img style={{ width: '80%' }} src={chair} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            </Container >
        </Box>
    );
};

export default AppointmentHeader;