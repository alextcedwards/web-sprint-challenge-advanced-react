import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");

  userEvent.type(firstNameInput, "Alex");
  userEvent.type(lastNameInput, "Edwards");
  userEvent.type(addressInput, "4th Ave");
  userEvent.type(cityInput, "Salt Lake City");
  userEvent.type(stateInput, "Utah");
  userEvent.type(zipInput, "84103");
  userEvent.click(button);

  expect(firstNameInput).toHaveValue("Alex");
  expect(lastNameInput).toHaveValue("Edwards");
  expect(addressInput).toHaveValue("4th Ave");
  expect(cityInput).toHaveValue("Salt Lake City");
  expect(stateInput).toHaveValue("Utah");
  expect(zipInput).toHaveValue("84103");

  const success = await screen.getByTestId("successMessage");
  expect(success).toBeInTheDocument();
});

