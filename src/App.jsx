import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
