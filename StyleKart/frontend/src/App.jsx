import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import './App.css'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
