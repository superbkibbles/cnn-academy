import React, { useEffect } from "react";
import Router from "next/router";

const Success = () => {
  useEffect(() => {
    Router.push({
      pathname: "/cnn-academy/en",
    });
  }, []);
  return <div></div>;
};

export default Success;
