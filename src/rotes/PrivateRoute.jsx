import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../components/providers/AuthProvider';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;