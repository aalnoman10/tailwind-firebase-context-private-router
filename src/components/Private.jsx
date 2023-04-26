import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex h-96 items-center justify-center">
            <button className="btn loading">loading..</button>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default Private;