import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  max-width: 900px;
  text-align: center;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 10px;
`;

const GridItem = styled.div`
  background: #000;
  color: #fff;
  padding: 30px;

  &:nth-child(even) {
    background: #ccc;
  }

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  &:nth-child(2) {
    grid-column: 7/10;
    grid-row: 2/4;
  }

  &:nth-child(3) {
    grid-column: 7/10;
  }

  &:nth-child(4) {
    grid-column: 1/6;
    grid-row: 4/6;
  }

  &:nth-child(9) {
    grid-column: 6/10;
    grid-row: 4/6;
  }
`;

export { GridLayout, GridItem };
