import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FlexGridItem = styled.div`
  padding: 10px;
  margin: 10px;
  background: #000;
  color: #fff;
  flex: 0 1 20%;
  box-sizing: border-box;
`;
