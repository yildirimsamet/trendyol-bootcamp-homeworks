import { renderWithContexts } from "../../helper";
import Timer from ".";
describe("<Timer/> component", () => {
  it("should render", () => {
    const { container } = renderWithContexts(<Timer />);
    expect(container.getElementsByClassName("timer").length).toBe(1);
  });
});
