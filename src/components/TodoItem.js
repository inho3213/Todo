import React from "react";

const TodoItem = (props) => {
  const { text } = props.todo;
  return <div>{text}</div>;
};

export default TodoItem;
