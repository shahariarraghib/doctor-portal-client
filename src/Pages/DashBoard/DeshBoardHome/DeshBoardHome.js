
import * as React from 'react';
import { Box, Grid } from '@mui/material';

import Calander from '../../Shared/Calender/Calander';
import DeshBordAppointment from '../DeshBordAppointment/DeshBordAppointment';
const DeshBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calander
                        date={date}
                        setDate={setDate}
                    ></Calander>
                </Grid>
                <Grid item xs={12} md={7}>
                    <DeshBordAppointment date={date}></DeshBordAppointment>
                </Grid>

            </Grid>
        </Box>
    );
};

export default DeshBoardHome;