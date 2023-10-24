import { Outlet, Link } from 'react-router-dom';
import Header from "../Header/Header";
import { Nav } from '../Nav/Nav';
import { monitorAuthState } from '../../config/firebase';
import { RootProvider } from './RootContext';

monitorAuthState();
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