//  TODO: find a way to remove the import required of "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
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
});
