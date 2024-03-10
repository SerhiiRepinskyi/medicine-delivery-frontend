import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "../components/SharedLayout";

const ShopPage = lazy(() => import("../pages/ShopPage/ShopPage"));
const ShoppingCartPage = lazy(() =>
  import("../pages/ShoppingCartPage/ShoppingCartPage")
);
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const CouponsPage = lazy(() => import("../pages/CouponsPage/CouponsPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
