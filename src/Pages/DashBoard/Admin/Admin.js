import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Admin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const { token } = useAuth();

    const handleOnBlur = evevt => {
        setEmail(evevt.target.value);
        // console.log(evevt.target.value)
    }
    const handleAdminSubmit = evevt => {
        const user = { email };
        // console.log(user)
        fetch('https://doctor-portal006.herokuapp.com/userInfo/admin', {
            method: 'PUT',
            headers: {
                // jwt token Bearer nam ta change kore dite hobe for sicurity 
                'authorization': `Bearer ${token}`,

                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data)
                    setSuccess(true)

                }

            })

        evevt.preventDefault();
    }
    return (
        <div>
            <h1>You Can Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '25%', mb: 5 }}
                    id="standard-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <Button sx={{ width: '25%', backgroundColor: '#59EBF2', }} type='submit' variant="contained">Make Admin</Button>

            </form>
            {
                success && <Alert severity="success">Make Admin Successfully</Alert>}
        </div>
    );
};

export default Admin;