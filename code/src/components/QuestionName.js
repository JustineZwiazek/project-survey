import React from "react";
import Button from "./Button";

const QuestionName = ({ name, onNameChange }) => {
  return (
    <section className="main">
      <label htmlFor="name-question" className="label">
        What is your name?
      </label>
      <div className="input-wrap">
        <input
          id="name-question"
          name="name-question"
          className="input"
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={onNameChange}
          required
        />
      </div>
      <Button button="Continue" />
    </section>
  );
};

export default QuestionName;
