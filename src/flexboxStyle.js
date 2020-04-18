import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: pink;

  /* flex-wrap: wrap; */
`;

export const FlexItem = styled.div`
  background: #eee;
  /* flex-basis: 200px; */
  /* min-width: 200px; */
  height: 100px;
  padding: 20px;
  box-sizing: border-box;

  &:nth-child(1) {
    background: red;
    flex-basis: 100px;
  }

  &:nth-child(2) {
    background: green;
    /* flex-shrink: 2; */
    /* flex-grow: 2; */
    flex-basis: 300px;
  }

  &:nth-child(3) {
    background: lightblue;
    flex: 0 1 200px;
  }

  &:nth-child(4) {
    background: lightcoral;
    flex-basis: 200px;
  }
`;

export const FlexContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  background: pink;
  height: 800px;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`;

export const FlexItem1 = styled.div`
  background: #eee;
  height: 100px;
  max-width: 500px;
  flex-grow: 3;
  flex-wrap: wrap;

  &:nth-child(1) {
    background: red;
    flex-basis: 100px;
  }

  &:nth-child(2) {
    background: green;
    flex-basis: 100px;
  }

  &:nth-child(3) {
    background: lightblue;
    //flex-basis: 100px;
    width: 600px;
  }

  &:nth-child(4) {
    background: lightcoral;
    flex-basis: 100px;
  }
`;
