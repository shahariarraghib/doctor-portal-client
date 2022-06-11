import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Fade, TextField } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModel = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phoneNumber: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = event => {
        event.preventDefault();
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: new Date(date).toLocaleDateString()

        }

        //    send data to server

        fetch('https://doctor-portal006.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                // console.log(data.result.insertedId) json({result})
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }

            });


        event.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <Box sx={{ my: 5 }}>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', }}
                                id="outline-size-small"
                                defaultValue={date.toDateString()}
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', my: 2 }}
                                id="outline-size-small"
                                defaultValue={time}
                            />
                            <TextField

                                sx={{ width: '90%', }}
                                name='patientName'
                                onBlur={handleOnBlur}
                                id="outline-size-small"
                                defaultValue={user.displayName}
                            />
                            <TextField

                                sx={{ width: '90%', my: 2 }}
                                id="outline-size-small"
                                name='email'
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                            />
                            <TextField

                                sx={{ width: '90%', }}
                                id="outline-size-small"
                                name='phoneNumber'
                                onBlur={handleOnBlur}
                                defaultValue='Phone Number'
                            />
                            <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: 5 }}>
                                <Button type='submit' style={{ marginTop: 30, backgroundColor: '#59EBF2', }} variant="contained" endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </Box>
                        </form>
                    </Box>

                </Box>
            </Fade>
        </Modal >
    );
};

export default BookingModel;