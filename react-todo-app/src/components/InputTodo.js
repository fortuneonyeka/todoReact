import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
    fName: "",
    lName: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert('enter a todo item please')
    }
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        {/* <input
          type="text"
          name="fName"
          placeholder="First Name..."
          value={this.state.fName}
          onChange={this.onChange}
        /> */}
        <button>Submit</button>
      </form>
    );
  }
}
export default InputTodo;
