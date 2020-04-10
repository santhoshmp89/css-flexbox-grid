import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: pink;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div`
  background: #eee;
  min-width: 220px;
  max-width: 220px;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  flex-grow: 1;

  &:nth-child(1) {
    background: red;
  }

  &:nth-child(2) {
    background: green;
    /* flex-shrink: 2; */
  }

  &:nth-child(3) {
    background: lightblue;
  }

  &:nth-child(4) {
    background: lightcoral;
  }
`;
