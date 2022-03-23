import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchThunk,
  selectStatus,
  selectTodo,
  setFilter,
} from "Features/Todos";
import { Button, Div, Input, ListDiv, MainDiv, TodoTitle, Ul } from "./styles";
import { TodoItem } from "Components/Todo";
import "./styles.css";

export default function TodoList() {
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const status = useSelector(selectStatus);

  const submit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: "@redux/todo/add", payload: todo });
    setValue("");
  };

  return (
    <Div>
      <MainDiv>
        <form onSubmit={submit}>
          <Input
            placeholder="New todo..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <Button
          bg="red"
          color="white"
          onClick={() => dispatch(setFilter("all"))}
        >
          Mostrar todos
        </Button>
        <Button
          bg="green"
          color="white"
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completados
        </Button>
        <Button
          bg="blue"
          color="white"
          onClick={() => dispatch(setFilter("incompleted"))}
        >
          Incompletos
        </Button>
        <Button
          bg="yellow"
          color="black"
          onClick={() => dispatch(fetchThunk())}
        >
          Fetch
        </Button>
      </MainDiv>
      <ListDiv>
        <Ul>
          <TodoTitle>TODO's</TodoTitle>
          {status.loading === "pending" ? (
            <div class="lds-dual-ring"></div>
          ) : (
            ""
          )}
          {status.loading === "rejected" ? <p>{status.error}</p> : ""}
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </Ul>
      </ListDiv>
    </Div>
  );
}
