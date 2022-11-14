import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const lcoation = useLocation;
     
    if(loader) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: lcoation }} replace />
};

export default PrivateRoute;