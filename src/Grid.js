import React from "react";
import { GridContainer, GridItem } from "./gridStyles";

export default class Grid extends React.Component {
  render() {
    return (
      <>
        <h2>Grid</h2>
        <hr />
        <br />

        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
          <GridItem>7</GridItem>
          <GridItem>8</GridItem>
          <GridItem>9</GridItem>
        </GridContainer>
      </>
    );
  }
}
