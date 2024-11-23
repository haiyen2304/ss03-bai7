import React, { useState } from "react";

export default function Form() {
  const [displayText, setdisplayText] = useState(""); // state ban đầu là rỗng
  // Hàm xử lý khi nội dung ô input thay đổi
  const handleChange = (event) => {
    setdisplayText(event.target.value);
  };

  return (
    <>
      <p>{displayText}</p>
      <input onChange={handleChange} />
    </>
  );
}
