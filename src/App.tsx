import "./styles/App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import logo from "./img/logo-dermatopik.png";
import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <>
      <header>
        <img src={logo} />
        <h1>Dziennik Obserwacji Skóry</h1>
      </header>

      <Dashboard />
    </>
  );
}

export default App;
