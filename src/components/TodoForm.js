import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="todo" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
