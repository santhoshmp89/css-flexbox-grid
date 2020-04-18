import React from "react";
import {
  FlexContainer,
  FlexItem,
  FlexContainer1,
  FlexItem1
} from "./flexboxStyle";

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
      <br /> <br />
      <FlexContainer1>
        <FlexItem1>One</FlexItem1>
        <FlexItem1>Two</FlexItem1>
        <FlexItem1>Three</FlexItem1>
        <FlexItem1>Four</FlexItem1>
      </FlexContainer1>
    </div>
  );
};
