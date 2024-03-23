// ProtectedRoute.js
import React from 'react';
import {Route, Navigate} from 'react-router-dom';
// import useAuth from './../states/is_authenticate';

const ProtectedRoute = ({ component: Component, path: path, ...rest }) => {
    const isAuthenticated = false;

    return isAuthenticated ? (
        <Route path={path} element={Component} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;
