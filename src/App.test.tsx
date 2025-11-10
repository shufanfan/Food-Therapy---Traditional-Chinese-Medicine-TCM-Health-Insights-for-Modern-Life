import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("app renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test("renders TCM wellness content", () => {
    render(<App />);

    const tcmElements = screen.queryAllByText(/Traditional Chinese Medicine/i);
    expect(tcmElements.length).toBeGreaterThan(0);
  });
});
