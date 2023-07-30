import "@testing-library/jest-dom";

import {render, screen } from "@testing-library/react";

import SearchInput from ".";

describe("SearchInput", () => {
  it("Должен иметь атрибут name = search", () => {
    render(<SearchInput />);

    const input = screen.getByTestId("input-search");
    expect(input.getAttribute("name")).toBe("search");
  });
});
