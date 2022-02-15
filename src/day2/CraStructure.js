import React, { Component } from "react";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";

class CraStructure extends Component {
  render() {
    return (
      <div>
        <pre>
          <h1>REACT</h1>
          <h3 style={{ color: "red" }}>
            Library v/s FrameWork (&) CRA Structure
          </h3>
          <h3>1)Readme.md File</h3>
          <h3>2)Package.json File</h3>
          <h3>3)Package-lock.json File</h3>
          <h3>4).gitignore File</h3>
          <h3>5)Public -index.html File</h3>
          <h3>6)Src -App.js</h3>
        </pre>

        <br />
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    );
  }
}

export default CraStructure;
