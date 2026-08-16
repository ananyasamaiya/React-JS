import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/Signup.jsx";
import Product from "./components/product/Product.jsx";
function App(){
 
  return (
    <div>
     <Navbar />

     <Routes>
      <Route path={"/"}  element={<Home />} />
      <Route path={"/products"}  element={<Product />} />
      <Route path={"/signin"}  element={<Signin />} />
      <Route path={"/signup"}  element={<Signup />} />
     </Routes>
    </div>
  )
}

export default App;