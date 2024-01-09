import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Tools from "./pages/Tools/Tools";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import AllProduct from "./pages/AllProduct/AllProduct";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        <Route path="/Allsales/:id" element={<Tools />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
