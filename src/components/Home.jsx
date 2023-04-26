import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-2xl'>Name : {user && <>{user.displayName}</>}</h2>
        </div>
    );
};

export default Home;