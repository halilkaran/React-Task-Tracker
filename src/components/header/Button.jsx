import { React, useState } from "react";

import "./Button.css";

function Button() {
  const [toggle, setToggle] = useState(true);
  const getbtn = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container text-center ">
      <button onClick={getbtn} class="btnn ">
        {toggle ? (
          <span>SHOW ADD TASK BAR</span>
        ) : (
          <span>CLOSE ADD TASK BAR</span>
        )}
      </button>
    </div>
  );
}

export default Button;
