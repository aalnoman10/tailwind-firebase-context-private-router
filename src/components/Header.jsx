import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Header = () => {
    const { user, singOutUser } = useContext(AuthContext)

    const handleSingOut = () => {
        singOutUser()
            .then(() => {
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <nav className="navbar bg-neutral text-neutral-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to='/profile' className="btn btn-ghost normal-case text-xl">Profile</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to='/resister' className="btn btn-ghost normal-case text-xl">Resister</Link>
            {
                user ? <>
                    <h4 className="text-2xl">{user.email}</h4>
                    <button onClick={handleSingOut} className="btn ml-3 btn-primary normal-case text-xl">sing Out</button>
                </>
                    : <Link to='/login' className="btn btn-primary normal-case text-xl">Login</Link>
            }
        </nav>
    );
};

export default Header;

