import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WithColonCards from "./components/HOC/WithColonCards";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <WithColonCards>
        <App />
      </WithColonCards>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
