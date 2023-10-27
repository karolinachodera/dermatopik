import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import { ReactElement } from "react";

import "./styles/App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Scorad from "./components/Scorad/Scorad";
import Root from "./components/Root/Root";
import { DailyCheck } from "./pages/DailyCheck";
import { Notes } from "./pages/Notes";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/scorad" element={<Scorad />} />
      <Route path="/daily" element={<DailyCheck />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

function App(): ReactElement {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
