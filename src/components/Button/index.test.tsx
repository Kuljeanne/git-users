import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Button from ".";

describe("Button", () => {
  it("Должен появляться атрибут disabled", () => {
    render(<Button disabled={true} type="pagination" text="<" />);

    const prevButton = screen.getAllByTestId("pagination-check")[0];

    expect(prevButton.getAttribute("disabled")).toBe("");
  });
});
