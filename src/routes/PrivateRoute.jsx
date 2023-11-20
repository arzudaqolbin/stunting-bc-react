import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, roles, ...rest }) => {
    const isAuthenticated = localStorage.getItem("access_token") !== null;
    const userRole = localStorage.getItem("role");

    if (!isAuthenticated) {
        // Jika tidak autentikasi, tampilkan alert dan arahkan ke halaman login
        alert("Anda tidak berhak mengakses halaman ini. Silakan login.");
        return <Navigate to="/login-admin" replace />;
    }

    if (roles && roles.indexOf(userRole) === -1) {
        // Jika peran tidak sesuai, tampilkan alert dan arahkan ke halaman login
        alert("Anda tidak berhak mengakses halaman ini. Silakan login dengan peran yang sesuai.");
        return <Navigate to="/login-admin" replace />;
    }

    return <Route {...rest} element={element} />;
};

export default PrivateRoute;
