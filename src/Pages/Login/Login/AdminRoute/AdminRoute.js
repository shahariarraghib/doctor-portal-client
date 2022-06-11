import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth()
    const location = useLocation();
    // console.log(admin)
    // console.log(user.email)
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    if (user.email && !admin) {
        return <Navigate to="/home" state={{ from: location }} replace />

    }

    else
        return children;

};

export default AdminRoute;