import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Tools from "./pages/Tools/Tools";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import AllProduct from "./pages/AllProduct/AllProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./storage/slice/productAllSlice";
import { getCategory } from "./storage/slice/categorySlice";
import CartProduct from "./pages/CardProduct/CardProduct";
import AllSales from "./pages/AllSales/AllSales";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        <Route path="/AllSales" element={<AllSales />} />
        <Route path="/Categories/:id" element={<Tools />} />
        <Route path="/CartProduct/:id" element={<CartProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
