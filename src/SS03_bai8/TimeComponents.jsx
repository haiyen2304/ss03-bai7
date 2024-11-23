import React, { useState } from "react";
import Button from "./Button";

export default function TimeComponents() {
  const [time, setTime] = useState(60); // giá trị khởi tạo ban đầu của đồng hồ là 60
  // cần lấy ra timeId khi setInterval để dùng ID đó cho vào clearInterval(id) khi xóa
  const [timeId, setTimeID] = useState(0);
  // setTimeout() -> chạy 1 lần xong thôi -> clearTimeout(id)
  // setInterval() -> chạy liên tục sau mỗi khoảng thời gian -> clearInterval(id)

  // làm nút start
  const handleStart = () => {
    setTimeID(
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000)
    );
  };

  // làm nút pause
  const handlePause = () => {
    clearInterval(timeId);
  };

  // làm nút reset
  // khi reset thì sẽ xóa ID dừng hàm của nút handleStart && cài ID time bắt đầu bằng 0 && và cho time khởi động lại từ 60
  const handleReset = () => {
    clearInterval(timeId);
    setTimeID(0);
    setTime(60);
  };

  return (
    <>
      <div>
        {/* sẽ có 3 nút là start - pause - reset */}
        <Button
          timeId={timeId}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        ></Button>
        <p>{time}</p>
      </div>
    </>
  );
}
