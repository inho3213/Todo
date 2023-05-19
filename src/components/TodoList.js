import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
