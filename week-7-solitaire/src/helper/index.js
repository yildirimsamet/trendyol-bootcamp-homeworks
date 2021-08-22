import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { render } from "@testing-library/react";
import WithColonCards from "../components/HOC/WithColonCards";

export const renderWithContexts = (Component) => {
  return render(
    <WithColonCards>
      <DndProvider backend={HTML5Backend}>{Component}</DndProvider>
    </WithColonCards>
  );
};
