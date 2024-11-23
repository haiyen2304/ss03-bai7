import React, { useState } from "react";

export default function StateListUser({ studentList }) {
  return (
    <>
      {studentList.map((student) => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.grade}</td>
        </tr>
      ))}
    </>
  );
}
