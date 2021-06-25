import React from "react";

const products = [
  {
    id: 1,
    title: "Vase Table",
    price: "1,209.99",
    img:
      "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
  },
  {
    id: 2,
    title: "Utopia Sofa",
    price: "1,209.99",
    img:
      "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
  },
  {
    id: 3,
    title: "Entertainment Center",
    price: "1,209.99",
    img:
      "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
  },
];

function Featuredproducts() {
  return (
    <div className="section2">
      <div className="text-center col-lg-10 offset-lg-1 ">
        <h3 style={{ fontSize: "2.3rem" }}>
          Featured Products
        </h3>
        <div className="underline-title"></div>
      </div>

      <div className="row col-10 offset-1">
        {products.map((prods) => {
          const { id, img, title, price } = prods;
          return (
            <div key={id} className="column col-lg-4">
              <div className="column-img  ">
                <img className="image " src={img} alt="desc" />
                <div className="middle">
                  <a href="products" className="link-search">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p>
                {title}
                <span style={{ color: "#ab7a5f" }}>${price}</span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center col-lg-10 offset-lg-1">
        <button
          className="btn"
          style={{ backgroundColor: "#ab7a5f", color: "#eaded7", fontSize:".9rem", marginTop:"3.5rem"}}
        >
          ALL PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default Featuredproducts;
