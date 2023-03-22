import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [],
};

//? action:{type, payload}
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: payload
          ? [
              ...state.todoList,
              { id: new Date().getTime(), text: payload, completed: false },
            ]
          : state.todoList,
      };
    case DELETE_TODO:
      return {
        todoList: state.todoList.filter((item) => item.id !== payload),
      };
    case TOGGLE_TODO:
      return {
        todoList: state.todoList.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };
    case CLEAR_TODO:
      return {
        todoList: initialState.todoList,
      };

    default:
      return {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      };
  }
};
export default todoReducer;
