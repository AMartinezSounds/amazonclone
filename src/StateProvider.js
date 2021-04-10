// set up data layer
//we need this to track the basket

// This is the data layer
import React, { createContext, useContext, useReducer } from "react";

// build a provider
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
