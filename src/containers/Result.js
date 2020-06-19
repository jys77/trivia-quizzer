import React from "react";
import styled from "styled-components";

const ResultWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 90%;
  }
  .your-score {
    width: 400px;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    font-size: 1.5rem;
    text-align: center;
    @media (max-width: 767px) {
      width: 100%;
    }
    span {
      color: #52c234;
      font-weight: 700;
      font-family: "Poppins", sans-serif;
    }
  }
  .buttons {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 400px;
    @media (max-width: 767px) {
      width: 100%;
    }
    .button {
      cursor: pointer;
      padding: 1rem;
      border: 1px solid white;
      border-radius: 10px;
      background-color: white;
      font-size: 1.5rem;
      text-align: center;
      width: 48%;
      @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Result = ({ totalNum, correctNum, retakeQuiz, backHome }) => {
  return (
    <ResultWrapper>
      <div className="your-score">
        Your Score:{" "}
        <span>
          {correctNum} / {totalNum}
        </span>
      </div>
      <div className="buttons">
        <div className="button" onClick={retakeQuiz}>
          Retake Quiz
        </div>
        <div className="button" onClick={backHome}>
          Back Home
        </div>
      </div>
    </ResultWrapper>
  );
};
