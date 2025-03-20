import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo Application", () => {
  test("should add a new todo when Add button is clicked", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Enter a task");
    const addButton = screen.getByText("Add");

    fireEvent.change(inputElement, { target: { value: "Banana" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  test("should remove the correct todo when Remove button is clicked", () => {
    render(<App />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Mango")).toBeInTheDocument();

    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.getByText("Mango")).toBeInTheDocument();
  });

  test("should not add an empty todo", () => {
    render(<App />);

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(screen.queryByText(" ")).not.toBeInTheDocument();
  });
});
