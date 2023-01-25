import { Route, Routes } from "react-router-dom";
import UsersList from "./pages/UsersList";
import EditForm from "./pages/EditForm";
import AddUser from "./pages/AddUser";
import NotFound from "./pages/NotFound";

const routesList = [
  { path: "/", component: <UsersList /> },
  { path: "/edit/:id", component: <EditForm /> },
  { path: "/addUser", component: <AddUser /> },
  {
    path: "*",
    component: <NotFound />,
  },
];
const RoutesList = () => {
  return (
    <Routes>
      {routesList.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};
export default RoutesList;
