import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import FlexBox from "./FlexBox";
import FlexboxGrid from "./FlexboxGrid";
import Grid from "./Grid";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>CSS Flexbox and Grid POC</h1>
        <Nav />
        <Switch>
          <Route path="/flexbox" component={FlexBox} />
          <Route path="/grid" component={Grid} />
          <Route path="/flexbox-grid" render={FlexboxGrid} />
        </Switch>
      </div>
    </Router>
  );
}
