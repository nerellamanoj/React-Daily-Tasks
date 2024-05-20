import React, { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "incrementAge":
      return { ...state, age: state.age + 10 };

    case "decrementage":
      return { ...state, age: state.age - 10 };
    case "incrementcount":
      return { ...state, count: state.count + 10 };
    case "decrementcount":
      return { ...state, count: state.count - 10 };
    case "changename":
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

const initialState = {
  name: "manoj",
  count: 100,
  age: 26,
  salary: 10000,
  subject: [1, 2, 3, 4],
};

export default function UseReducer() {
  const [currentvalue, disptachFunction] = useReducer(
    reducerFunction,
    initialState
  );

  const IncrementAge = () => {
    disptachFunction({ type: "incrementAge" });
  };
  const DecrementAge = () => {
    disptachFunction({ type: "decrementage" });
  };

  return (
    <div>
      <h3>useReducerExample</h3>
      {/* <h3>{initialState.name}</h3> */}
      <h3>{currentvalue.age}</h3>
      <button onClick={IncrementAge}> IncrementAge</button>
      <button onClick={DecrementAge}>DecrementAge</button>
      <button>Incrementcount</button>
      <button>decrementcount</button>
    </div>
  );
}
