import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

//* render method gets two parameters
//* 1-) the component to be rendered.
//* 2-) the component to be rendered in which DOM element

ReactDOM.render(<App />, document.getElementById("root"));
