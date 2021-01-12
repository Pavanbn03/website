import React, { useState } from "react";

const Model = ({ status = "Sucessfull" }) => {
  const [model, setModel] = useState(false);
  return (
    <div className="ModelContainer">
      <div className="model">
        <h3> Email sent {status}</h3>
      </div>
    </div>
  );
};

export default Model;
