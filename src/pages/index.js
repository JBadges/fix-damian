import React from "react";
import styled from "styled-components";
import TwoBG from "../components/twoColorBG";

const Name = styled.p`
  color: white;
  text-align: center;
`;

export default () => (
  <React.Fragment>
    <TwoBG leftColor="#F1F2DA" rightColor="#B09E99" />
    {/* <Name>Hey, I'm Jackson a passionate software developer. <br /> Why don't you try scrollong down</Name> */}
  </React.Fragment>
);
