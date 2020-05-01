import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  max-width: 900px;
  text-align: center;
  /* grid-template-columns: 33.3% 33.3% 33.3%; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(3, 1fr);
`;

export const GridItem = styled.div`
  background: #000;
  color: #fff;
  padding: 30px;

  &:nth-child(even) {
    background: #ccc;
  }
`;
