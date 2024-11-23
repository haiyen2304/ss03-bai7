import React from "react";

export default function Button({ children }) {
  console.log("children:", children);

  return (
    <>
      <button>{children}</button>
    </>
  );
}
