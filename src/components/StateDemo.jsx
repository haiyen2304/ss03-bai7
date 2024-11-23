import React, { useState } from "react";

export default function StateDemo() {
  const result = useState(0);
  const firstElement = result[0];
  return <div>StateDemo</div>;
}
