import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import StateDemo from "./components/StateDemo";
import TimeComponents from "./SS03_bai8/TimeComponents";
import Text from "./SS03_bai9/Text";
import Form from "./SS03_bai10/Form";
import Table from "./SS03_bai11/Table";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* bài 8 */}
      {/* <TimeComponents /> */}
      {/* bài 9 */}
      {/* <Text /> */}
      {/* bài 10 */}
      {/* <Form /> */}
      {/* bài 11 */}
      <Table />

      {/* <ParentComponent /> */}
      <StateDemo />
    </>
  );
}

export default App;
