import React from "react";

function Greet(props) {
  console.log(props);
  return (
    <h1>
      Hello {props.firstname} {props.lastname}!
    </h1>
  );
}

const Greet2 = ({ firstname, lastname }) => {
  return (
    <h1>
      Hello {firstname} {lastname}! Second Greeting!
    </h1>
  );
};

const Greet3 = (props) => {
  const { firstname, lastname } = props;
  return (
    <h1>
      Hello {firstname} {lastname}! Greeting 3.
    </h1>
  );
};

export { Greet, Greet2, Greet3 };
