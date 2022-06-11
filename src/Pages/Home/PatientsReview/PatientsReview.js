import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import profile1 from '../../../images/people-1.png'
import profile2 from '../../../images/people-2.png'
import profile3 from '../../../images/people-3.png'

const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    style: { width: '5rem', height: '5rem' },
};
const PatientsReview = () => {
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5} md={8}>
                            <Box style={{ textAlign: 'left', paddingTop: 100 }}>
                                <Typography variant='h7' style={{ fontWeight: 600, color: '#59EBF2', }}>
                                    TESTIMONIAL
                                </Typography>
                                <Typography variant='h4'>
                                    What's Our Patients <br />Says
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <FormatQuoteIcon style={{ fontSize: 300, color: '#59EBF2' }}></FormatQuoteIcon>
                        </Grid>

                    </Grid>
                </Box>


                <Box>
                    <Grid container spacing={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={12} md={4} sx={{ boxShadow: 2 }} >
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto impedit, dicta cum sit ad reprehenderit tempora ex alias nisi!
                            </Typography>

                            <Box style={{ display: 'flex', alignItems: "center", justifyContent: "center", }} mt={8}>
                                <Box>
                                    <img src={profile1} alt="" />
                                </Box>
                                <Box style={{ padding: 20, textAlign: 'left' }}>
                                    <Typography style={{ color: '#59EBF2', }}>
                                        Winson Herry 1
                                    </Typography>
                                    <Typography style={{ color: 'gray', }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={4} sx={{ boxShadow: 2 }} >


                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto impedit, dicta cum sit ad reprehenderit tempora ex alias nisi!
                            </Typography>


                            <Box style={{ display: 'flex', alignItems: "center", justifyContent: "center", }} mt={8}>
                                <Box>
                                    <img src={profile2} alt="" />
                                </Box>
                                <Box style={{ padding: 20, textAlign: 'left' }}>
                                    <Typography style={{ color: '#59EBF2', }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography style={{ color: 'gray', }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>
                        <Grid item xs={12} md={4} sx={{ boxShadow: 2 }} >
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto impedit, dicta cum sit ad reprehenderit tempora ex alias nisi!
                            </Typography>

                            <Box style={{ display: 'flex', alignItems: "center", justifyContent: "center", }} mt={8}>
                                <Box>
                                    <img src={profile3} alt="" />
                                </Box>
                                <Box style={{ padding: 20, textAlign: 'left' }}>
                                    <Typography style={{ color: '#59EBF2', }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography style={{ color: 'gray', }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>
            </Container>

        </>
    );
};

export default PatientsReview;