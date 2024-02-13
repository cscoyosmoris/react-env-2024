import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textinput from "./Textinput";

test("TextInput Component test", async () => {
  const user = userEvent.setup();
  render(<Textinput />);

  const textElement = screen.getByText("Entered text:");
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText("Text Input");
  await user.type(inputElement, "Hello world");
  expect(screen.getByText("Entered text: Hello world")).toBeInTheDocument();
});
