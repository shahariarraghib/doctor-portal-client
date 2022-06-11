import React from 'react';
import AppointmentAvailable from './AppointmentAvailable/AppointmentAvailable';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AppointmentAvailable date={date}></AppointmentAvailable>
        </div>
    );
};

export default Appointment;