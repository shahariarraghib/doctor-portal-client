
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const Service = (props) => {
    const { name, description, img } = props.service;

    return (
        <div >

            <Card sx={{ maxWidth: 'auto', border: 0, boxShadow: 0, m: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </div >
    );
};

export default Service;