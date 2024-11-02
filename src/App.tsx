import { useReducer } from "react";

type StateType = {
  count: number;
};
const InitialState: StateType = {
  count: 0,
};

type ActionType =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <>
      <div style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        background: "#f9f9f9",
      }}>
        <h1>Counter</h1>
        <p
          style={{
            fontSize: "1.2em",
          }}
        >
          The Counter project is a simple, interactive application demonstrating
          the use of React's useReducer hook for state management, combined with
          TypeScript to ensure type safety.The useReducer hook is ideal for
          managing complex state logic, and TypeScript’s static typing ensures
          that only valid updates are performed, making this counter a great
          example of type-safe state management in React.
        </p>
      </div>

      <p
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          fontSize: "2em",
          fontWeight: "bold",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {state.count}
      </p>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
        style={{
          fontSize: "1.5em",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
        style={{
          fontSize: "1.5em",
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
