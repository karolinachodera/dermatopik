import { Outlet } from 'react-router-dom';
import Header from "../Header/Header";
import { Nav } from '../Nav/Nav';
import { RootProvider } from './RootContext';

function Root() {
    return (
        <RootProvider>
            <Header />
            <Nav />
            <Outlet />
        </RootProvider>
    )
}

export default Root;