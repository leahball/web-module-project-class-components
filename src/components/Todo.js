import React from "react";
import "./Todo.css";

const Todo = (props) => {
  const handleClick = () => {
    props.handleToggleTodo(props.todo);
  };

  return (
    <div
      onClick={handleClick}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
