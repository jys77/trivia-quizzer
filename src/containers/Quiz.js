import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "../components/Loader";

const QuizWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 90%;
  }
  .question-outer {
    width: 600px;
    height: 100px;
    border: 1px white solid;
    border-radius: 10px;
    background-color: #fff;
    font-size: 1.5rem;
    display: table;
    padding: 10px;
    @media (max-width: 767px) {
      width: 100%;
    }
    .question-inner {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      width: 100%;
    }
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    justify-content: space-between;
    font-size: 1.5rem;
    @media (max-width: 767px) {
      width: 100%;
    }
    .option-outer {
      margin-top: 2rem;
      border: 1px solid white;
      border-radius: 10px;
      background-color: #fff;
      height: 50px;
      padding: 5px;
      width: 290px;
      display: table;
      @media (max-width: 767px) {
        width: 100%;
      }
      .option-inner {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        width: 100%;
      }
    }
  }
`;

export const Quiz = ({ questions }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (questions.length > 0) {
      setOptions(
        [questions[0].correct_answer, ...questions[0].incorrect_answers].sort(
          () => Math.random() - 0.5
        )
      );
    }
  }, [questions]);

  return questions.length > 0 ? (
    <QuizWrapper>
      <div className="question-outer">
        <div
          className="question-inner"
          dangerouslySetInnerHTML={{ __html: questions[0].question }}
        ></div>
      </div>
      <div className="options">
        {options.map((opt) => (
          <div className="option-outer">
            <div
              className="option-inner"
              dangerouslySetInnerHTML={{ __html: opt }}
            ></div>
          </div>
        ))}
      </div>
    </QuizWrapper>
  ) : (
    <Loader />
  );
};
