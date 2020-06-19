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
  .question {
    width: 600px;
    height: 100px;
    border: 1px white solid;
    border-radius: 10px;
    background-color: #fff;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .option {
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
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: questions[0].question }}
      ></div>
      <div className="options">
        {options.map((opt) => (
          <div
            className="option"
            dangerouslySetInnerHTML={{ __html: opt }}
          ></div>
        ))}
      </div>
    </QuizWrapper>
  ) : (
    <Loader />
  );
};
