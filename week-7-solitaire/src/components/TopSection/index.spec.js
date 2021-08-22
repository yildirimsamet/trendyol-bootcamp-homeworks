import { renderWithContexts } from "../../helper";
import TopSection from ".";

describe("<TopSection /> component", () => {
  it("should render", () => {
    const { container } = renderWithContexts(<TopSection />);
    expect(container.getElementsByClassName("topSection").length).toBe(1);
  });
});
