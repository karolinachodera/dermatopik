import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, useParams} from "react-router-dom";
import { ReactElement } from "react";

import "./styles/App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Scorad from "./components/Scorad/Scorad";
import Root from "./components/Root/Root";
import { DailyCheck } from "./pages/DailyCheck";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/scorad" element={<Scorad />} />
      <Route path="/daily" element={<DailyCheck />} />
    </Route>
  )
);

function App(): ReactElement {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
