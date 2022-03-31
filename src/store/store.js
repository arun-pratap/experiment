import React, { createContext, useContext, useReducer } from "react";

// initiate data-layer[createContext]
export const StateContext = createContext();
console.log("StateContext",StateContext)

//Wrap app and provide data layer [Create reusable stateProvider components]
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
console.log("StateProvider:",StateContext.Provider)

//pull info from data layer [pull data wherever needed]
export const useStateValue= () =>useContext(StateContext)
console.log("UseStateValue:",useStateValue)
