import React from "react";
import dchannel from "./../../img/dchannel.png";

const Panel = () => {
  return (
    <div>
      {/* <p> Welcome..</p> */}

      <div className="header">
        <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        />
        <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        />
        <img
          src={dchannel}
          style={{ width: "150px", height: "150px", padding: "20px" }}
        />
      </div>
    </div>
  );
};

export default Panel;
