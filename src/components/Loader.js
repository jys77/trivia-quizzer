import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: -60px;
    margin-top: -60px;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
  }
`;

export const Loader = () => (
  <LoaderWrapper>
    <div className="loader"></div>
  </LoaderWrapper>
);
