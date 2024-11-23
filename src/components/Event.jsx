import React from "react";

export default function Event() {
  const handleClick = () => {
    console.log("clicked");
  };
  const handlerDoubleClick = () => {
    console.log("double Click");
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <button onDoubleClick={handlerDoubleClick()}>DoubleClick</button>
    </div>
  );
}
