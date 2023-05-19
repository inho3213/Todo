import React from "react";

const Template = (props) => {
  return (
    <div>
      <div>오늘의 할 일(0)</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Template;
