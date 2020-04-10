import React from "react";
import { FlexContainer, FlexItem } from "./flexboxStyle";

export default () => {
  return (
    <div>
      <h2>Flexbox</h2>
      <hr />
      <FlexContainer>
        <FlexItem>One</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
        <FlexItem>Four</FlexItem>
      </FlexContainer>
    </div>
  );
};
