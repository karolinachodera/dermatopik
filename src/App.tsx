import "./styles/App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
