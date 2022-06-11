import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth()
    const location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />

    }

    else
        return children;

};

export default PrivateRoute;