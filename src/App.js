import { products } from "./database/products";
import "./index.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Products from "./components/AllProducts";
import Header from "./components/Header";
import Category from "./components/Category";
import { productsByCategory } from "./controller";

export default function App() {
  const [params, setParams] = useState({
    category: "",
  });

  const handleCategory = (category) => {
    setParams({
      ...params,
      category: category,
    });
  };

  const filteredProducts = () => {
    if (params.category !== "") {
      return productsByCategory(params.category);
    } else {
      return products.data;
    }
  };

  return (
    <div className="container-fluid px-0 justify-content-center">
      <Header />
      <HomePage />
      <Category handleClick={handleCategory} />
      <Products
        filteredProducts={filteredProducts()}
        categoryName={params.category}
      />
    </div>
  );
}
