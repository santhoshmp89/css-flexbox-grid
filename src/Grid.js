import React from "react";
import { GridContainer, GridItem } from "./gridStyles";
import { Link, withRouter } from "react-router-dom";

class Grid extends React.Component {
  render() {
    return (
      <>
        <h2>Grid</h2>
        <hr />
        <Link to={`${this.props.location.pathname}/grid-layout`}>
          Grid Layout
        </Link>
        <br />
        <br />

        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </GridItem>
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

export default withRouter(Grid);
