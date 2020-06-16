import React from "react";
import "./style.css";

function Container(props) {
  return <div id="container" className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
