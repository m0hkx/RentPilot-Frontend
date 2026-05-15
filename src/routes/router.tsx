import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Properties from "../pages/Properties";
import Tenants from "../pages/Tenants";
import Analytics from "../pages/Analytics";
import Documents from "../pages/Documents";
import Leases from "../pages/Leases";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "tenants",
        element: <Tenants />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "leases",
        element: <Leases />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ],
  },
]);