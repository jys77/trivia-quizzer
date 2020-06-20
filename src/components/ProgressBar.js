import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 2s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #348ac7;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: #45b649;
  width: ${({ percent }) => percent}%;
`;

export const ProgressBar = ({ percent }) => {
  return (
    <Container>
      <Background />
      <Progress percent={percent} />
    </Container>
  );
};
