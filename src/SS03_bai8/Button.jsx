import React from "react";

export default function Button({
  timeId,
  handleStart,
  handlePause,
  handleReset,
}) {
  return (
    <>
      <div className="actions">
        {!timeId ? <button onClick={handleStart}>start</button> : ""}
        {timeId ? <button onClick={handlePause}>pause</button> : ""}
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}
