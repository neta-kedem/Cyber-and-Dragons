import React from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  return (
    <div className={"App"}>
      <h2>{"Welcome to Cyber & Dragons"}</h2>
      <h3>{"fake logging in by pressing this button"}</h3>
      <Button text={"Play!"} />
    </div>
  );
}

export default App;
