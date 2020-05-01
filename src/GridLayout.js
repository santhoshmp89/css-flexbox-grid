import React from "react";
import { GridLayout, GridItem } from "./gridLayoutStyles";

const GridLayoutApp = () => {
  return (
    <div>
      <h2>Grid Layout</h2>
      <br />
      <hr />
      <br />
      <GridLayout>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
        <GridItem>8</GridItem>
        <GridItem>9</GridItem>
      </GridLayout>
    </div>
  );
};

export default GridLayoutApp;
