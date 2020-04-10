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
