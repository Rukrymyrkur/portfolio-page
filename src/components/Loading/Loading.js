import React from "react";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <BarLoader width={`100%`} color={`#f30a49`} loading />
    </>
  );
};

export default Loading;
