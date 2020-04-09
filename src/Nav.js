import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <Link to="/flexbox">Flexbox</Link> <br />
      <Link to="/grid">Grid</Link>
    </>
  );
}
