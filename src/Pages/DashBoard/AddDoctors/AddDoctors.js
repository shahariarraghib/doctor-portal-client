import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddDoctors = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    

    const handleSubmit = event => {

        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Doctor add Successfully')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        event.preventDefault();
    }

    return (
        <div>
            <h1>add doctor </h1>

            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    onChange={event => setName(event.target.value)}
                    sx={{ width: '50%' }}
                    label="Name"
                    variant="standard" />

                <br />

                <TextField
                    required
                    onChange={event => setEmail(event.target.value)}
                    sx={{ width: '50%' }}
                    label="Email"
                    variant="standard" />

                <br />

                <input accept="image/*" multiple type="file"
                    onChange={event => setImage(event.target.files[0])}
                />


                <br />
                <Button variant="contained" type='submit'>
                    add doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctors;