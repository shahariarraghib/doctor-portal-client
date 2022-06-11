import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModel from '../BookingModel/BookingModel';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant='h5' sx={{ fontWeight: 700, fontSize: 26, color: '#59EBF2' }}>
                        {name}
                    </Typography>
                    <Typography variant='h6' sx={{ fontWeight: 400, }}>
                        {time}
                    </Typography>
                    <Typography variant='h7' sx={{ fontSize: 14, color: 'gray', }}>
                        {space} SPACE AVAILABLE
                    </Typography>

                    <Box sx={{ py: 2 }}>
                        <Button onClick={handleOpen} style={{ backgroundColor: '#59EBF2' }} variant="contained">BOOK APPOINTMENT</Button>
                    </Box>
                </Paper >
            </Grid>


            <BookingModel
                date={date}
                booking={booking}
                handleClose={handleClose}
                open={open}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModel>
        </>
    );
};

export default Booking;