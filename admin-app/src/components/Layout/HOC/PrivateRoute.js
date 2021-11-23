import React from 'react';
import { Route , Routes, Navigate } from 'react-router-dom';




const PrivateRoute = ({ component: Component, ...rest }) => {
    // return <Route />;
    return (
        <Routes>
              <Route {...rest} component={() => {
            const token = window.localStorage.getItem('token');
            if (token) {
                return <Component {...rest} />
            } else {
                return <Navigate to={'./signin'} />;
            }

        }} />
        </Routes>
      
    )
}


export default PrivateRoute;