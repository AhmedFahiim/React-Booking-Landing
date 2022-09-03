import React from "react";
import "./Landing.scss";
import Header from "../Header/Header";
function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <Header />
        <div className="holder row">
          <article className="mainBox col-lg-6">
            <h1 className="mainWord">
              A Simple Bookmark <br />
              Manager
            </h1>
            <p className="disc">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="buttons">
              <button className="main first active">Get it on Chrome</button>
              <button className="main sec">Get it on Firefox</button>
            </div>
          </article>
          <article className="imgBox col-lg-6">
            <img src="images/illustration-hero.svg" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Landing;
