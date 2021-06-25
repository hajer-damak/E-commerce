import React from "react";
import Header from "./header";
import Products from "./products";
import Filter from "./filter";
import "./css.css"

function ProductsPage() {
  return (
    <div>
      <Header />
      <main style={{backgroundColor:"white", padding:"6rem 0rem"}}>
      <div className="row col-lg-11 offset-1">
        <div className="col--2 filter" id="filter">
          <Filter />
        </div>
        <div className="products" >
          <Products/>
        </div>
      </div>
      </main>
    </div>
  );
}

export default ProductsPage;
