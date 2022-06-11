import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import Service from '../../Service/Service';
import FluorideTreatment from '../../../../images/fluoride.png'
import CavityFilling from '../../../../images/cavity.png'
import TeethWhitening from '../../../../images/whitening.png'
import { Typography } from '@mui/material';
const services = [
    {
        name: 'Fluorida Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: FluorideTreatment


    },
    {
        name: 'Cavity Filling',
        description: ' Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.',
        img: CavityFilling


    },
    {
        name: 'Teeth Whitening',
        description: 'Hydrogen peroxide is a mild bleach that can help to whiten stained teeth . For optimal whitening, a person can try brushing with a mix of baking soda and hydrogen peroxide for 1-2 minutes twice a day for a week.',
        img: TeethWhitening


    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography gutterBottom variant="h5" component="div" fontWeight={600} color="#59EBF2" mt='50px'>
                    OUR SERVICES
                </Typography>
                <Typography gutterBottom variant="h4" component="div" m={2}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={4} >
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;