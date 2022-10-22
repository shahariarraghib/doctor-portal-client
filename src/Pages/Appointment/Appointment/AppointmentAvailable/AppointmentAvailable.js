import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontic",
    price: 20,
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    price: 30,
    time: "5:00 PM - 6:30 PM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    price: 40,
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    price: 50,
    time: "7:00 AM - 8:30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontic",
    price: 60,
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontic",
    price: 70,
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
];

const AppointmentAvailable = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Box>
      <Container>
        {bookingSuccess && (
          <Alert severity="success">Appointment Booking Successfully</Alert>
        )}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 32,
            color: "#59EBF2",
            my: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Available Appointment On {date.toDateString()}
        </Typography>

        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={2}>
            {bookings.map((booking) => (
              <Booking
                key={booking.id}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
              ></Booking>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentAvailable;
