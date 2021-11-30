import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const { completed, id, title } = props.todo;
  return (
    <div>
      <li className={styles.item}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    </div>
  ); 
}

export default TodoItem;
