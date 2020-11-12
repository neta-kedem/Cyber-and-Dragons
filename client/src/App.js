import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
        <span>Cyber & Dragons</span>
        <Link to="/game" className="App-header">
          Imagine a login page
        </Link>
    </div>
  );
}

export default App;
