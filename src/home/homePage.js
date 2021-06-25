import React from "react";
import Accueil from "./accueil";
import Feateredproducts from "./featuredproducts";
import Newsletter from "./newsletter";
import Signature from "./signature";
import "./style.css"

function HomePage() {
  return (
    <div className="home-page">
      <Accueil />
      <Feateredproducts />
      <Signature />
      <Newsletter />
    </div>
  );
}

export default HomePage;
