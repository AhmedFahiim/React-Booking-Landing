import React, { useState } from "react";
import "./Extension.scss";

function Extesion() {
  const [browsers] = useState([
    { image: "images/logo-chrome.svg", name: "Chrome", version: "62" },
    { image: "images/logo-firefox.svg", name: "Firefox", version: "55" },
    { image: "images/logo-opera.svg", name: "Opera", version: "46" },
  ]);

  const mapping = browsers.map((e, index) => {
    return (
      <div key={index} className="browserEx">
        <img className="pic" src={e.image} />
        <h2 className="name">{e.name}</h2>
        <span className="version">{`Mininum Version ${e.version}`}</span>
        <button className="main">Add {`&`} Install Extension</button>
      </div>
    );
  });

  return (
    <section id="Download" className="Extension">
      <article className="sectionHeader">
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </article>
      <article className="cards-holder">
        <div className="container">
          <div className="grid">{mapping}</div>
        </div>
      </article>
    </section>
  );
}

export default Extesion;
