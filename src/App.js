import "./App.css";
import Scorad from "./Scorad";

function App() {
  return (
    <>
      <h1>Dziennik Obserwacji Skóry</h1>
      <form>
        <Scorad id="erythema" description="Rumień" />
      </form>
    </>
  );
}

export default App;
