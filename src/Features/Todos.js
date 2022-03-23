import { combineReducers } from "redux";
import { makeFetchingReducer, makeSetReducer, reduceReducers } from "./Utils";

export const setPeding = () => ({ type: "@redux/todo/pending" });
export const setFulfilled = (payload) => ({
  type: "@redux/todo/fulfilled",
  payload,
});
export const setError = (error) => ({
  type: "@redux/todo/error",
  error: error.message,
});
export const setCompleted = (payload) => ({
  type: "@redux/todo/done",
  payload,
});
export const setFilter = (payload) => ({ type: "@redux/filter/set", payload });

export const fetchThunk = () => async (dispatch) => {
  dispatch(setPeding());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const todos = data.slice(0, 10);
    dispatch(setFulfilled(todos));
  } catch (e) {
    dispatch(setError());
  }
};

export const filterReducer = makeSetReducer(["@redux/filter/set"]);

export const fetchingReducer = makeFetchingReducer([
  "@redux/todo/pending",
  "@redux/todo/fulfilled",
  "@redux/todo/error",
]);

const fulfilledReducer = makeSetReducer(['@redux/todo/fulfilled'])

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "@redux/todo/add": {
      return state.concat({ ...action.payload });
    }
    case "@redux/todo/done": {
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    }
    default:
      return fulfilledReducer(state, action);
  }
};

export const reducer = combineReducers({
  todos: combineReducers({
    entities: todosReducer,
    status: fetchingReducer,
  }),
  filter: filterReducer,
});

export const selectTodo = (state) => {
  const {
    todos: { entities },
    filter,
  } = state;

  if (filter === "completed") return entities.filter((todo) => todo.completed);

  if (filter === "incompleted")
    return entities.filter((todo) => !todo.completed);

  return entities;
};

export const selectStatus = (state) => state.todos.status;
