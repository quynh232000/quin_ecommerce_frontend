import { ReactElement } from "react";
import AppLayout from "../layouts/AppLayout";
import ShopLayout from "../layouts/ShopLayout";
import DashboardPage from "../pages/shop/DashboardPage";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import CollectionPage from "../pages/CollectionPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import DetailPage from "../pages/DetailPage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentPage from "../pages/PaymentPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import LayoutProfile from "../layouts/LayoutProfile";
import ProfilePage from "../pages/profile/ProfilePage";
import PasswordPage from "../pages/profile/PasswordPage";
import AddressPage from "../pages/profile/AddressPage";
import NotifyPage from "../pages/profile/NotifyPage";
import VoucherPage from "../pages/profile/VoucherPage";
import FavouritePage from "../pages/profile/FavouritePage";
import OrderPage from "../pages/profile/OrderPage";
import OrderDetailPage from "../pages/profile/OrderDetailPage";

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
      { path: "/", element: <HomePage />  },
      { path: "/collection", element: <CollectionPage />  },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
      { path: "/detail", element: <DetailPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/payment", element: <PaymentPage /> },
      { path: "/checkout-success", element: <CheckoutSuccessPage /> },
    ],
  },
  {
    path:'user',
    element:<LayoutProfile/>,
    children:[
      { path: "profile", element: <ProfilePage />  },
      { path: "password", element: <PasswordPage />  },
      { path: "address", element: <AddressPage />  },
      { path: "notifications", element: <NotifyPage />  },
      { path: "voucher", element: <VoucherPage />  },
      { path: "favourite", element: <FavouritePage />  },
      { path: "order", element: <OrderPage />  },
      { path: "order-detail", element: <OrderDetailPage />  },
    ]
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
