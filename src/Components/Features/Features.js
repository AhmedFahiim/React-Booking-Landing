import React, { useState } from "react";
import "./Features.scss";

function Features() {
  const [features] = useState([
    {
      id: 0,
      image: "images/illustration-features-tab-1.svg",
      head: "Bookmark in one click",
      details:
        "Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      id: 1,
      image: "images/illustration-features-tab-2.svg",
      head: "Intelligent search",
      details:
        "Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.",
    },
    {
      id: 2,
      image: "images/illustration-features-tab-3.svg",
      head: " Share your bookmarks ",
      details:
        "Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button. ",
    },
  ]);
  const [Active, setActive] = useState(0);

  const navHandler = (id) => {
    setActive(id);
  };

  return (
    <section id="Features" className="features">
      <article className="sectionHeader">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </article>
      <article className="nav">
        <ul className="links">
          <li
            onClick={() => navHandler(0)}
            className={`link-item ${Active == 0 && "active"}`}
          >
            Simple Bookmarking
          </li>
          <li
            onClick={() => navHandler(1)}
            className={`link-item ${Active == 1 && "active"}`}
          >
            Speedy Searching
          </li>
          <li
            onClick={() => navHandler(2)}
            className={`link-item ${Active == 2 && "active"}`}
          >
            Easy Sharing
          </li>
        </ul>
      </article>
      <article className="features-holder">
        <div className="container">
          <div className="feature row">
            <div className="pic col-lg-6">
              <img src={features[Active].image} />
            </div>
            <div className="content col-lg-5">
              <h2 className="featureHead">{features[Active].head}</h2>
              <p className="details">{features[Active].details}</p>
              <button className="main">More Info</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Features;
