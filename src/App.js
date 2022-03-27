import "./index.css";
import HomePage from "./components/HomePage";
import Products from "./components/products";

export default function App() {
  console.log("AppPage:",__dirname.concat("components/products"))
  return (
    <div className="container-fluid px-0 justify-content-center">
      <HomePage />
      <Products />
    </div>
  );
}
