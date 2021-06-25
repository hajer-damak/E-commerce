import React from "react";

function Newsletter() {
  return (
    <div className="section4">
      <div className="container">
        <div className="newsletter-title">
          <h3>Join our newsletter and get 20% off</h3>
        </div>
        <div className="row newsletter-text">
          <p className="col-lg-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>

          <div className="input-group col-lg-5 newsletter-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter e-mail"
              aria-label="Enter e-mail"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: "#ab7a5f", color: "#eaded7"}}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
