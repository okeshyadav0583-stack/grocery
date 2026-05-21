import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Category from "./Component/Category/Category";
import Values from "./Component/Values/Values";
import Products from "./Component/Products/Products";
import Discount from "./Component/Discount/Discount";
import Process from "./Component/Process/Process";
import Testimonials from "./Component/Testimonials/Testimonials";
import Footer from "./Component/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;