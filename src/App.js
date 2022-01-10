import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  //Toggle Clear Todo
  handleClearTodo = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };

  //Add todo
  handleAddTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  //toggle todo
  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((item) => {
        if (item.id === selectedTodo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          handleToggleTodo={this.handleToggleTodo}
          todos={this.state.todos}
        />
        <TodoForm handleAddTodo={this.handleAddTodo} />
        <button onClick={this.handleClearTodo}>Clear Todo</button>
      </div>
    );
  }
}

export default App;
