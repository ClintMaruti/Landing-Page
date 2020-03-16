import React from "react";

const LandingPage = () => (
  <div className="container">
    <div className="box">
      <div className="title">
        <span className="block"></span>
        <h1>
          Clint Maruti<span></span>
        </h1>
      </div>
      <div className="role">
        <div className="block"></div>
        <p>Software Engineer</p>
      </div>
    </div>
    <a href="/">
      <footer>
        <div className="texto">
          <span>
          <i className="zmdi zmdi-github zmdi-hc-4x"></i>
           Checkout My Github
          </span>
        </div>
      </footer>
    </a>
  </div>
);

export default LandingPage;
