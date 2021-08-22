import { render } from "@testing-library/react";
import WithColonCards from "./WithColonCards";
describe("<WithColonCards /> component", () => {
  it("should render children", () => {
    const { getByText } = render(
      <WithColonCards>
        <p>Test</p>
      </WithColonCards>
    );
    expect(getByText(/Test/)).toBeInTheDocument();
  });
});
