import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./common/nav";
import Footer from "./common/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./home/homePage";
import ProductsPage from "./products/productsPage";
import About from "./about/about";

function App() {
  return (
    <div className="html">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={()=>< HomePage />} />
          <Route path="/about" exact component={()=>< About />} />
          <Route path="/products" exact component={()=>< ProductsPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
