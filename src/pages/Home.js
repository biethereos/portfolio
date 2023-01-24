import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('assets/images/bg_portfolio.svg')` }}
      >
        <div>
          <h1>Hung Nguyen</h1>
          <div className="intro-content d-flex justify-content-evenly">
            <p>
              MERN Stack <br /> Developer, Python
            </p>
            <button className="primary-button font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
