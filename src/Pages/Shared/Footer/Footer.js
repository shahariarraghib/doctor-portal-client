import { Box, Button, Container, Grid, Link, Stack } from '@mui/material';
import React from 'react';
import footerBg from '../../../images/footer-bg.png'
import { blue, pink } from '@mui/material/colors';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const footerBgStyle = {
    background: `url(${footerBg})`,


}
const Footer = () => {
    return (
        <Container style={footerBgStyle} >


            <Box sx={{ flexGrow: 1, mt: 5 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <h1>About Company</h1>
                        <p>A company can be created as a legal person so that the company itself has limited liability as members perform or fail to discharge their duty according to the publicly declared incorporation, or published policy.</p>

                        <Link href="https://www.facebook.com/shahariar.raghib/" target="_blank"><FacebookOutlinedIcon sx={{ fontSize: 35, color: blue[800] }} /></Link>
                        <Link href="https://www.instagram.com/shahariar_raghib/" target="_blank"> <InstagramIcon sx={{ fontSize: 35, color: pink[800] }} /></Link>

                        <Link href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/" target="_blank"> <LinkedInIcon sx={{ fontSize: 35, color: blue[800] }} /></Link>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <h1>Useful Links</h1>


                        <Box >
                            <NavLink style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                        </Box>

                        <Box >
                            <NavLink style={{ textDecoration: 'none' }} to="/appointment">Appointment</NavLink>
                        </Box>

                        <Box >
                            <NavLink style={{ textDecoration: 'none' }} to="/deshboard">Deshboard</NavLink>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1>Contact Us</h1>
                        <Stack >
                            <Link style={{ textDecoration: 'none', }} href="tel: +8801689797288" > <Button variant="text" startIcon={<LocalPhoneIcon />}>
                                +8801689797288
                            </Button></Link>

                            <Link style={{ textDecoration: 'none' }} href="https://mail.google.com/" > <Button variant="text" startIcon={<MailIcon />}>
                                sr.raghib@gmail.com
                            </Button></Link>


                        </Stack>
                    </Grid>

                </Grid>
            </Box>
        </Container >
    );
};

export default Footer;