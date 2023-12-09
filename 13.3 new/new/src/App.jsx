import { useState, useRef, useEffect } from "react";
import { changeColor } from "./changeColor";

import "./App.css";

function App() {
  const box1 = useRef();

  useEffect(() => {
    changeColor(box1);
  }, []);

  return (
    <>
      <div ref={box1} className="box"></div>
    </>
  );
}

export default App;
