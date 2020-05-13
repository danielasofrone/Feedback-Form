import React from "react";

const ErrorMessage = ({ touched, message }) => {
  if (!touched) {
    return <div>error</div>;
  }
  if (messsage) {
    return <div>{message}</div>;
  }
  return <div>all good</div>;
};

export default ErrorMessage;
