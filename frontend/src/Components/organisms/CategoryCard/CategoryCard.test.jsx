import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";

describe("CategoryCard", () => {
  test("renders title", () => {
    const title = "Soy un card";
    render(
      <BrowserRouter basename="/">
        <CategoryCard title={title} />
      </BrowserRouter>
    );
    expect(screen.getByText(title)).toBeDefined();
  });

  test("renders icon", () => {
    const icon = <div data-testid="icon" />;
    render(
      <BrowserRouter basename="/">
        <CategoryCard title="Soy un card" icon={icon} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("icon")).toBeDefined();
  });
});
