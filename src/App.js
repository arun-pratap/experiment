import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import CheckoutProduct from './components/CheckOutProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/checkout" element={<CheckoutProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
