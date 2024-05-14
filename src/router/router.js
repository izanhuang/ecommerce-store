import { createBrowserRouter } from "react-router-dom";
import Products from "../features/products/Products";
import OrderHistory from "../features/order-history/OrderHistory";
import Checkout from "../features/checkout/Checkout";
import ErrorPage from "../features/error-page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
    errorElement: <ErrorPage />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/order-history",
    element: <OrderHistory />
  }
])