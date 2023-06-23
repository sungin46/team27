import React from "react";

const Random = ({ random }) => {
  const number = Math.floor(random);
  return <p>{number}</p>;
};
const Minmax = () => {
  const max = 100;
  const random = Math.random() * max;
  return <Random random={random} />;
};

export default Minmax;
