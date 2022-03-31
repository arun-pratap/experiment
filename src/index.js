import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

import { reducer, initialState } from "./store/reducer";
import { StateProvider } from "./store/store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
