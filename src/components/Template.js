import React from "react";
import classes from "./Template.module.css";

const Template = (props) => {
  return (
    <div className={classes.template}>
      <div className={classes.title}>오늘의 할 일({props.todoLength})</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Template;
