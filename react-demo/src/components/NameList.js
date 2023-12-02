import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Rhonda", "Chenoa", "Iain"];
  const persons = [
    {
      id: 1,
      name: "Rhonda",
      age: 43,
      skill: "React",
    },
    {
      id: 2,
      name: "Chenoa",
      age: 24,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Iain",
      age: 25,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return <div>{nameList}</div>;
}

export default NameList;
