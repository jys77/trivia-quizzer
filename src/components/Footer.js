import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: fixed;
  height: 2.5rem;
  bottom: 0;
  width: 100%;
  background-color: #0b0e21;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: #fff;
  div:nth-child(1) {
    a {
      text-decoration: none;
      color: #348ac7;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  div:nth-child(2) {
    span {
      color: red;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        Welcome to star or folk it on{" "}
        <a href="https://github.com/jys77/trivia-quizzer" target="__blank">
          GitHub
        </a>
        , and feel free to create issues or pull requests.
      </div>
      <div>
        Designed & Made with <span>♥</span> by Yunsheng
      </div>
    </FooterWrapper>
  );
};
