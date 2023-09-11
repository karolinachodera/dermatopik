import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, useParams} from "react-router-dom";
import { ReactElement } from "react";

import "./styles/App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Scorad from "./components/Scorad/Scorad";
import Root from "./components/Root/Root";

interface ScoradResult {
  result: number, description: string, date: Date,
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/scorad" element={<ScoradWithProps />} />
    </Route>
  )
);

function ScoradWithProps(): ReactElement {
  // Use the useParams hook to access route parameters
  const params = useParams<{ handleScoradFinish: any }>();

  // Pass the handleScoradFinish prop to the Scorad component
  return <Scorad handleScoradFinish={params.handleScoradFinish} />;
}
function App(): ReactElement {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
