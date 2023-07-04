//import "./App.css";
import Scorad from "./components/Scorad/Scorad";
import Dashboard from "./components/Dashboard/Dashboard";
import logo from "./img/logo-dermatopik.png";

function App() {
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
