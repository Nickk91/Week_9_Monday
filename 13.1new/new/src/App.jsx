import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("blue");
  const div1 = useRef();
  useEffect(() => {
    setTimeout(() => {
      setColor((color) => (color = "green"));
    }, 1000);
  }, [div1]);

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <div id={color} ref={div1}></div>
    </>
  );
}

export default App;
