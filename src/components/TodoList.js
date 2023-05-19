import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div className={classes.todoList}>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
