import React, { useState } from "react";
import styled from "styled-components";
import { CATEGORIES, NUMBER } from "../constants";

const StartWrapper = styled.div`
  /* display: flex;
  flex-flow: column;
  align-items: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    font-size: 5rem;
    font-family: "Piedra", cursive;
    color: #fff;
    text-align: center;
    @media (max-width: 767px) {
      font-size: 2.6rem;
    }
  }
  .panel {
    .select-box {
      font-family: "Poppins", sans-serif;
      margin-top: 2rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      div {
        font-size: 1.5rem;
        font-weight: 500;
        color: #fff;
      }
      select {
        -webkit-appearance: none;
        background-color: #fff;
        font-size: 1.5rem;
        margin-top: 0.5rem;
        padding: 5px 10px;
        height: 40px;
        box-shadow: none;
        border-radius: 10px;
        width: 250px;
        position: relative;
      }
    }
    .start-button {
      cursor: pointer;
      margin: 0 auto;
      margin-top: 2rem;
      border: white solid 2px;
      border-radius: 10px;
      text-align: center;
      font-size: 1.8rem;
      line-height: 60px;
      color: white;
      font-weight: 500;
      width: 100px;
      height: 60px;
    }
  }
`;

export const Start = ({ startQuiz }) => {
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [number, setNumber] = useState(NUMBER[0].value);

  const selectedValue = {
    category,
    number,
  };
  return (
    <StartWrapper>
      <div className="title">Trivia Quizzer</div>
      <div className="panel">
        <div className="select-box">
          <div>Category</div>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.key} value={cat.value}>
                {cat.text}
              </option>
            ))}
          </select>
        </div>
        <div className="select-box">
          <div># of Questions</div>
          <select
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
            {NUMBER.map((num) => (
              <option key={num.key} value={num.value}>
                {num.text}
              </option>
            ))}
          </select>
        </div>
        <div className="start-button" onClick={() => startQuiz(selectedValue)}>
          Start
        </div>
      </div>
    </StartWrapper>
  );
};
