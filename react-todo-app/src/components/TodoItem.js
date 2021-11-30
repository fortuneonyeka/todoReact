import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
        {props.todo.title}
      </li>
    </div>
  ); 
}

export default TodoItem;
