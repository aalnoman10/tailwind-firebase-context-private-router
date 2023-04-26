import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Leyout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Leyout;