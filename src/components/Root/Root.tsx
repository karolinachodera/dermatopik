import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import { RootProvider } from './RootContext';

function Root() {
    return (
        <RootProvider>
            <Header />
            <Outlet/>
        </RootProvider>
    )
}

export default Root;