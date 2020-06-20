import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Loader } from "../components/Loader";
import { ProgressBar } from "../components/ProgressBar";

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
      cursor: pointer;
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

export const Quiz = ({ questions, finishQuiz }) => {
  const [options, setOptions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [number, setNumber] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);
  const [finished, setFinished] = useState(false);

  const refs = useRef([...new Array(4)].map(() => React.createRef()));

  useEffect(() => {
    if (questions.length > 0) {
      setNumber(questions.length);
      setOptions(
        [
          questions[questionIndex].correct_answer,
          ...questions[questionIndex].incorrect_answers,
        ].sort(() => Math.random() - 0.5)
      );
    }
  }, [questions, questionIndex]);

  const correctIndicator = (opt) => {
    refs.current[options.indexOf(opt)].current.style.border =
      "1px solid #52c234";
    refs.current[options.indexOf(opt)].current.style.backgroundColor =
      "#52c234";
    refs.current[options.indexOf(opt)].current.style.color = "#fff";
  };

  const wrongIndicator = (opt) => {
    refs.current[options.indexOf(opt)].current.style.border =
      "1px solid #ED213A";
    refs.current[options.indexOf(opt)].current.style.backgroundColor =
      "#ED213A";
    refs.current[options.indexOf(opt)].current.style.color = "#fff";
  };

  const resetIndicator = (opt) => {
    refs.current[options.indexOf(opt)].current.style.border = "1px solid white";
    refs.current[options.indexOf(opt)].current.style.backgroundColor = "#fff";
    refs.current[options.indexOf(opt)].current.style.color = "#000";
  };

  const optionHandler = (opt) => {
    if (!finished && questionIndex < number - 1) {
      if (isCorrect(opt)) {
        setCorrectNum(correctNum + 1);
        correctIndicator(opt);
      } else {
        wrongIndicator(opt);
        correctIndicator(questions[questionIndex].correct_answer);
      }
      setTimeout(() => {
        resetIndicator(opt);
        resetIndicator(questions[questionIndex].correct_answer);
        setQuestionIndex(questionIndex + 1);
      }, 2000);
    } else if (questionIndex === number - 1) {
      if (isCorrect(opt)) {
        setCorrectNum(correctNum + 1);
        correctIndicator(opt);
      } else {
        wrongIndicator(opt);
        correctIndicator(questions[questionIndex].correct_answer);
      }
      setTimeout(() => {
        resetIndicator(opt);
        resetIndicator(questions[questionIndex].correct_answer);
        setFinished(true);
      }, 2000);
    }
  };

  const isCorrect = (selectedOption) => {
    if (questions[questionIndex].correct_answer === selectedOption) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (finished) {
      finishQuiz({ number, correctNum });
      setCorrectNum(0);
      setQuestionIndex(0);
    }
  }, [finished, correctNum, finishQuiz, number]);

  const percentage = () => {
    return (100 * (questionIndex + 1)) / number;
  };

  return questions.length > 0 ? (
    <>
      <ProgressBar percent={percentage} />
      <QuizWrapper>
        <div className="question-outer">
          <div
            className="question-inner"
            dangerouslySetInnerHTML={{
              __html: questions[questionIndex].question,
            }}
          ></div>
        </div>
        <div className="options">
          {options.map((opt, i) => (
            <div
              key={opt}
              onClick={() => optionHandler(opt)}
              className="option-outer"
              ref={refs.current[i]}
            >
              <div
                className="option-inner"
                dangerouslySetInnerHTML={{ __html: opt }}
              ></div>
            </div>
          ))}
        </div>
      </QuizWrapper>
    </>
  ) : (
    <Loader />
  );
};
