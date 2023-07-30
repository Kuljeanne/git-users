import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Pagination from ".";

describe("Pagination", () => {
  it("Должен вызываться обработчик при клике на кнопку", () => {
    const onPrevPageClick = jest.fn();

    render(
      <Pagination
        disable={{
          left: false,
          right: false,
        }}
        onPrevPageClick={onPrevPageClick}
        onNextPageClick={jest.fn()}
      />
    );

    const prevButton = screen.getAllByTestId("pagination-check")[0];
    fireEvent.click(prevButton);

    expect(onPrevPageClick).toHaveBeenCalledTimes(1);
  });

  it('Не должны отображаться номера страниц если не предоставлен пропс "nav"', () => {
    render(
      <Pagination
        disable={{
          left: false,
          right: false,
        }}
        onPrevPageClick={jest.fn()}
        onNextPageClick={jest.fn()}
      />
    );

    expect(() => screen.getByTestId('nav')).toThrow();
  });
});
