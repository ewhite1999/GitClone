/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import RepoPage from ".";

describe("form component", () => {
  beforeEach(() => {
    render(<RepoPage />);
  });

  it("renders a form", () => {
    const form = screen.queryByRole("form");
    expect(form).not.toBe(null);
  });

  it("lets you input a github username", () => {
    const nameInput = screen.queryByLabelText(/username/i);
    expect(nameInput).not.toBe(null);
  });

  it("the username is required", () => {
    const nameInput = screen.queryByLabelText(/username/i);
    expect(nameInput.required).toBe(true);
  });

  it("has a submit button", () => {
    const submit = screen.queryByRole("button");
    expect(submit).not.toBe(null);
  });
});
