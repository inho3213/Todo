import React from "react";
import classes from "./TodoItem.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const TodoItem = (props) => {
  const { id, text, checked } = props.todo;
  return (
    <div className={classes.todoItem}>
      <div className={classes.content}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
