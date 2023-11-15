import { fireEvent, render } from "@testing-library/react";
import Home from "./Home";

const renderHome = () => render(<Home />);

describe("Home", () => {
  it("should render Home page correctly", () => {
    const { getByText, getByAltText, getByRole } = renderHome();

    const WLogo = getByAltText(/vite logo/i);
    const ReactLogo = getByAltText(/react logo/i);
    const appTitle = getByText(/wivenn playground/i);
    const counterButton = getByRole("button");

    expect(WLogo).toBeInTheDocument();
    expect(ReactLogo).toBeInTheDocument();
    expect(appTitle).toBeInTheDocument();
    expect(counterButton).toBeInTheDocument();
  });

  it("handle with state count", () => {
    const { getByRole } = renderHome();
    const counterButton = getByRole("button");

    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent("count is 1");

    fireEvent.click(counterButton);
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent("count is 3");
  });
});
