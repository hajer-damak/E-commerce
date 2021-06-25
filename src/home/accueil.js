import React from "react";

function Accueil() {
  return (
    <div className="container section1 col-lg-11">
      <div className="row">
        <div className="col-lg-6">
          <h3 className=" offset-1 home-title">
            Design Your Comfort Zone
          </h3>
          <p
            className="offset-1"
            style={{ color: "#617d98", lineHeight: "2", fontSize: "1.15rem", maxWidth:"32rem" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <div>
            <button
              className="btn offset-1"
              style={{ backgroundColor: "#ab7a5f", color: "#eaded7" }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block img-homepage">
          <div className="empty-block"></div>
          <img
            className="img-table"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="table"
          />
          <img
            className="img-person"
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}

export default Accueil;
