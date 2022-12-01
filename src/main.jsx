import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home";
import CreateTask from "./pages/CreateTask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
import Categories from "./pages/Categories";
import Task from "./pages/Task";
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  UNSAFE_NavigationContext,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks/newtask",
    element: <CreateTask />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/tasks/:id",
    element: <Task />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
