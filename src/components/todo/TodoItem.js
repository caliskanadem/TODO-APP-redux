import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoAction";

const TodoItem = ({ todo }) => {
  const { completed, text, id } = todo;

  const dispatch = useDispatch();

  const handleToggle = (e) => {
    dispatch(toggleTodo(id));
    console.log(id);
  };

  const handleDelete = (e) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed
      ? "rgba(186, 34, 34, 0.721)"
      : "rgb(47, 130, 47)",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
