import React from "react";

export default function TextChildren({ changeText }) {
  return (
    <>
      <button onClick={changeText}>Thay đổi nội dung</button>
    </>
  );
}
