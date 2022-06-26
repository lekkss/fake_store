import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

function App() {
  // const theme = useSelector((state) => state.setTheme.theme);

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  return (
    <Router>
      <div className="dark:bg-slate-900">
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
