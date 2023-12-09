import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const FavColor = () => {
  const divOne = useRef();
  const [color, setColor] = useState("green");
  useEffect(() => {
    setTimeout(() => {
      setColor((color) => (color = "red"));
    }, 1000);
  }, [divOne]);
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <div id="" ref={divOne}></div>
    </>
  );
};

export default FavColor;
