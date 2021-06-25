import { useContext, useReducer, createContext } from "react";

const initialState = {
  count: 7,
  user: null,
};

export const actionType = {
  incrementCount: "INCREMENT_COUNT",
  decrementCount: "DECREMENT_COUNT",
  setUser: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.incrementCount:
      return { ...state, count: state.count + 1 };

    case actionType.decrementCount:
      return { ...state, count: state.count - 1 };

    case actionType.setUser:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

const reducerContext = createContext();

export const ReducerWrapper = ({ children }) => {
  return (
    <reducerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </reducerContext.Provider>
  );
};

export const useReducerValue = () => useContext(reducerContext);
