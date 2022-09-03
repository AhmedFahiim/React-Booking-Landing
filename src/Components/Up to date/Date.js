import React, { useState, useRef } from "react";
import "./Date.scss";
function Date() {
  const [value, setValue] = useState("");
  const element = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let regEx = /(www\.)?\w\.\w{2,4}/i;
    !regEx.test(value)
      ? element.current.classList.add("error")
      : element.current.classList.remove("error");
    setValue("");
  };

  return (
    <section className="Date">
      <article className="mainContent">
        <div className="top">
          <p className="joined">35,000+ already joined</p>
          <h3 className="heading">Stay up-to-date with what we’re doing</h3>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div ref={element} className="holder">
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
              placeholder="enter your email address."
            />
            <img className="error-icon" src="images/icon-error.svg" />
          </div>
          <button className="main">Contact Us</button>
        </form>
      </article>
    </section>
  );
}

export default Date;
