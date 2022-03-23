import { setCompleted } from "Features/Todos";
import { useDispatch } from "react-redux";

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
      <li
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch(setCompleted(todo))}
      >
        {todo.title}
      </li>
    );
  };