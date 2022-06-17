import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route element={<>404 Not Found</>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
