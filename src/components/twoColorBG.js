import React from "react";
import styled from "styled-components";

const Full = styled.div`
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  position: fixed !important;
  overflow: hidden;
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  left: 50%;
  position: fixed !important;
  overflow: hidden;
`;

export default props => (
  <Full>
    <Left style={{ "background-color": props.leftColor }}></Left>
    <Right style={{ "background-color": props.rightColor }}></Right>
  </Full>
);
