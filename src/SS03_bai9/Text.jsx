import React, { useState } from "react";
import TextChildren from "./TextChildren";

export default function Text() {
  const texts = [
    "Đây là nội dung ban đầu",
    "Nội dung đã được thay đổi!",
    "React thật thú vị!",
    "Bạn vừa nhấn nút!",
    "Học lập trình thật vui!",
  ];
  const [text, setText] = useState(texts[0]);
  // hàm thay đổi nội dung
  const changeText = () => {
    //========================
    // cách 1: thay đổi 1 lần
    // setText("nội dung sau khi được thay đổi !!!!!!!!");
    //========================
    // cách 2: thay đổi khi có 2 phần tử
    // setText((prev) =>
    //   prev === "Nội dung văn bản ban đầu"
    //     ? "nội dung sau khi được thay đổi !!!!!!!!"
    //     : "Nội dung văn bản ban đầu"
    // );
    //========================
    // cách 3 :có 1 mảng các văn bản, và hàm setText sẽ cho random vị trí của mảng, để lấy ra văn bản bất kì
    const randomIndex = Math.floor(Math.random() * texts.length);
    setText(text[randomIndex]);
  };

  return (
    <>
      {/* hiển thị giá trị của state */}
      <p>{text}</p>
      {/* tạo bước onClick thay đổi nội dung */}
      <TextChildren changeText={changeText} />
    </>
  );
}
