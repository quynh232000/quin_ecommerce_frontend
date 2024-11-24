import { ReactElement } from "react";
import AppLayout from "../layouts/AppLayout";
import ShopLayout from "../layouts/ShopLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardPage from "../pages/shop/DashboardPage";
import Error from "../pages/Error";

interface RouteType {
  path: string;
  element: ReactElement;
  middleware?: "auth" | "guest" | string;
  children?: RouteType[];
}
export const routesConfig: RouteType[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home />  },
      { path: "login", element: <Login />, middleware: "guest" },
    ],
  },
  {
    path: "/shop",
    element: <ShopLayout />,
    middleware: "auth",
    children: [
      { path: "dashboard", element: <DashboardPage /> }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
