import React from "react";

function Home() {
  return (
    <div>
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./assets/images/bg_portfolio.svg')` }}
      >
        <div>
          <h1>HungNguyen</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              MERN Stack <br /> Developer, Python
            </p>
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
