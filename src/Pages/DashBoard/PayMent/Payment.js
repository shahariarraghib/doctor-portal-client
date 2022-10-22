import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51LL2cIKpdigjyVsdFcGItmmnZnbrZ20zlS3beuC9UZ3i4zbGoHeplsMOtO2K2q3b8YnWyccidujRYJJmwPUKE4qk001skrqYkQ')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));

    }, [appointmentId])
    return (
        <div>
            <h2>Please {appointment.patientName}pay for {appointment.serviceName}</h2>
            <h4>pay: ${appointment.price}</h4>


            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckOutForm
                        appointment={appointment}

                    ></CheckOutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;