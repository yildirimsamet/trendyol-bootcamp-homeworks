import { expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import Card from ".";
import { renderWithContexts } from "../../helper";
describe("<Card/> specs", () => {
  const cardProps = {
    className: "cardTest",
    suit: "♠",
    value: "5",
    pushToTop: "50",
    id: "5",
    colonId: 5,
    draggable: true,
    isDown: false,
  };
  it("should render card", () => {
    const { container } = { ...renderWithContexts(<Card {...cardProps} />) };
    expect(container.querySelectorAll(`#card${cardProps.id}`).length).toBe(1);
    expect(container.querySelectorAll(`.cardTest`).length).toBe(1);
    expect(container.getElementsByClassName("cardMain")[0].innerHTML).toBe(
      `${cardProps.value} ${cardProps.suit}`
    );
  });
  it("should render draggable component", () => {
    const { container } = renderWithContexts(<Card {...cardProps} />);
    expect(container.getElementsByClassName(`cardTest`)[0].draggable).toBe(
      true
    );
  });
  it("should render notDraggable component", () => {
    const { container } = renderWithContexts(
      <Card {...cardProps} isDown={true} />
    );
    expect(container.getElementsByClassName(`eventsNone`).length).toBe(1);
  });
  it("should render change color to notDraggable component", () => {
    const { container } = renderWithContexts(
      <Card {...cardProps} draggable={false} />
    );
    expect(container.getElementsByClassName(`bgFade`).length).toBe(1);
  });
});
