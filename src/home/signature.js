import React from "react";

const signatures = [
  {
    id: 1,
    title: "Mission",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    title: "Vision",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    title: "History",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

function Signature() {
  return (
    <div className="section3">
      <div className="container">
        <div className="row title">
          <h3 className="col-lg-4 col-sm-6 ">Custom Furniture Built Only For You</h3>
          <p className="col-lg-7 offset-lg-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
          <div className="row paragraph">
            {signatures.map((sig) => {
              const { id, title, text } = sig;
              return (
                <div key={id} className="col-lg-4">
                  <div className="sig-card">
                    <h5 className="text-center">{title}</h5>
                    <p className="text-center">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        
      </div>
    </div>
  );
}

export default Signature;
