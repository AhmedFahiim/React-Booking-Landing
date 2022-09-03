import React, { useState } from "react";

import "./Qestions.scss";

function Qestions() {
  const [Active, setActive] = useState(null);

  const showAnswer = (e) => {
    if (e.currentTarget.getAttribute("id") == Active) {
      setActive(null);
    } else setActive(e.currentTarget.getAttribute("id"));
  };

  return (
    <section className="Qestions">
      <article className="sectionHeader">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <article className="questionsHolder">
        <div
          id="0"
          className={`question ${Active == 0 && "show-answer"}`}
          onClick={(e) => showAnswer(e)}
        >
          <div className="question-head">
            <h3 className="question-word">What is Bookmark?</h3>
            <i className="fa-solid fa-angle-down arrow"></i>
          </div>
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div
          id="1"
          className={`question ${Active == 1 && "show-answer"}`}
          onClick={(e) => showAnswer(e)}
        >
          <div className="question-head">
            <h3 className="question-word">How can I request a new browser?</h3>
            <i className="fa-solid fa-angle-down arrow"></i>
          </div>
          <p className="answer">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div
          id="2"
          className={`question ${Active == 2 && "show-answer"}`}
          onClick={(e) => showAnswer(e)}
        >
          <div className="question-head">
            <h3 className="question-word">Is there a mobile app?</h3>
            <i className="fa-solid fa-angle-down arrow"></i>
          </div>
          <p className="answer">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        <div
          id="3"
          className={`question ${Active == 3 && "show-answer"}`}
          onClick={(e) => showAnswer(e)}
        >
          <div className="question-head">
            <h3 className="question-word">
              What about other Chromium browsers?
            </h3>
            <i className="fa-solid fa-angle-down arrow"></i>
          </div>
          <p className="answer">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </article>
      <button className="main">More Info</button>
    </section>
  );
}

export default Qestions;
