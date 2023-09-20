import { Outlet, Link } from 'react-router-dom';
import Header from "../Header/Header";
import Section from '../Section/Section';
import { RootProvider } from './RootContext';

function Root() {
    return (
        <RootProvider>
            <Header />
            <Outlet />
            <Section id="navigation" width="full-width">
        <Link to="/scorad" className="button">Oceń Scorad</Link>
        <Link to="/daily" className="button">Daily Check</Link>
        <Link to="/notes" className="button">Notatki</Link>
      </Section>
        </RootProvider>
    )
}

export default Root;