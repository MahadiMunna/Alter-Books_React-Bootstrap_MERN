import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <><PropagateLoader color="#36d7b7" /></>
    }

    if(user){
        return children;
    }
     
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;