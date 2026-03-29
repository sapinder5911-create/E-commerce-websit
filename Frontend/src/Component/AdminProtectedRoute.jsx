// components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {

    const role = localStorage.getItem("role");

    if (role !== "admin") {
        return <Navigate to="/" />; 
    }

    return children;
};

export default AdminProtectedRoute;