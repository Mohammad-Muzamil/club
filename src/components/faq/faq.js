import React, { useState } from "react";
import downward_arrow from "../../assets/img/icons/downward_arrow.svg";
import upward_arrow from "../../assets/img/icons/upward_arrow.svg";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleArrow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="faqConatiner">
        <p className="faqQuestions">{question}</p>
        <img
          className="dropdown-arrow"
          src={isOpen ? upward_arrow : downward_arrow}
          alt="Arrow"
          onClick={toggleArrow}
        />
      </div>
      {isOpen && (
        <div className="faqAnswerConatiner">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
