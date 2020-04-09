import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import FlexBox from "./FlexBox";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>CSS Flexbox and Grid POC</h1>
        <Nav />
        <Switch>
          <Route path="/flexbox" component={FlexBox} />
          <Route path="/grid" render={() => <h2>Grid</h2>} />
        </Switch>
      </div>
    </Router>
  );
}
