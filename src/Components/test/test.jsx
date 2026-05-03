import { useState } from "react";
import "./test.css";

const Test = () => {
  const [color, setColor] = useState("green");

  return (
    <div>
      <header>
        <h1 className={color}>This is a new test</h1>
        <button onClick={() => setColor("green")}>green</button>
        <button onClick={() => setColor("red")}>red</button>
      </header>
    </div>
  );
};

export default Test;
