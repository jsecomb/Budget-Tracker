import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="Jumbotron" id="Jumbotron">
        <div className="row">
            <div className="col-3">
                <i id="currency" className="fa fa-money text-center"></i>
            </div>
            <div className="col-6">
                <h1 className="text-center">$aving ¢ents</h1>
            </div>
            <div className="col-3">
            <i id="currency" className="fa fa-cc-visa text-center"></i>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron;