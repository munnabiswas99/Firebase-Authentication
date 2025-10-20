import React from 'react';
import Navbar from '../components/header/Header';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;