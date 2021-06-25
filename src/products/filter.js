import React from "react";

function Filter() {
  return (
    <div>
      <div className="active-cyan-4 mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          defaultValue="Search"
        />
      </div>
      <nav className="nav flex-column navigation-column">
        <div>
          <a className="nav-link disabled" href="#">
            <h6 style={{ fontWeight: "bold" }}>Category</h6>
          </a>
          <a className="nav-link active" href="#">
            ALL
          </a>
          <a className="nav-link" href="#">
            Bedroom
          </a>
          <a className="nav-link" href="#">
            Office
          </a>
          <a className="nav-link" href="#">
            Kitchen
          </a>
          <a className="nav-link" href="#">
            Living Room
          </a>
          <a className="nav-link" href="#">
            Kids
          </a>
          <a className="nav-link" href="#">
            Dinning
          </a>
        </div>
        <div style={{marginTop:"1rem"}}>
          <a className="nav-link disabled" href="#">
            <h6 style={{ fontWeight: "bold" }}>Campany</h6>
          </a>
          <div className="nav-link">
            <div className="input-group mb-3 ">
              <select className="custom-select ">
                <option >ALL</option>
                <option >ikea</option>
                <option >marcos</option>
                <option >liddy</option>
                <option >caressa</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{marginTop:"1rem"}}>
          <a className="nav-link disabled" href="#">
            <h6 style={{ fontWeight: "bold" }}>Colors</h6>
          </a>
          <div className="nav-link">
            <a href="/products">ALL</a>
            <button
              className="button-color"
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              className="button-color"
              style={{ backgroundColor: "grey" }}
            ></button>
            <button
              className="button-color"
              style={{ backgroundColor: "red" }}
            ></button>
            <button
              className="button-color"
              style={{ backgroundColor: "yellow" }}
            ></button>
            <button
              className="button-color"
              style={{ backgroundColor: "green" }}
            ></button>
          </div>
        </div>
        <div style={{marginTop:"1rem"}}>
          <a className="nav-link disabled" href="#">
            <h6 style={{ fontWeight: "bold" }}>Prices</h6>
          </a>
          <div className="nav-link">
            <h5>$</h5>
            <input type="range" min="1" max="100" value="50" />
          </div>
        </div>
        <div className="nav-link" style={{marginTop:"2rem"}}>
          Free Shipping
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            style={{ marginLeft: "1rem" }}
           
          />
        </div>
        <div className="nav-link" style={{marginTop:"2rem"}}>
          <button type="button" className="btn btn-danger">
            Clear Filters
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Filter;
