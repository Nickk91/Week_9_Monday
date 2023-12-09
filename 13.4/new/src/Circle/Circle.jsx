import React from "react";
import "./Circle.css";
import { useRef } from "react";
import { useEffect } from "react";

const Circle = (props) => {
  const circle = useRef();

  useEffect(() => {
    setTimeout(() => {
      circle.current.style.visibility = "hidden";
    }, 2000);
  }, []);

  return (
    <div ref={circle} className="circle">
      Circle
    </div>
  );
};

export default Circle;
