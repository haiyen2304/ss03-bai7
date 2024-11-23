import React from "react";
import ChidrenComponent from "./ChidrenComponent";
import Button from "./Button";

export default function ParentComponent() {
  const userName = "Nguyen Van A";

  return (
    <>
      <div>ChidrenComponent</div>
      <hr />
      <Button>
        <a>Click me</a>
      </Button>
      <hr />
      <ChidrenComponent userName={userName} />
    </>
  );
}
