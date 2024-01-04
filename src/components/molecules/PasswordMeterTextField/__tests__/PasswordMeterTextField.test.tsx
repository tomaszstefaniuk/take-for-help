import { render, screen } from "@testing-library/react";
import { PasswordMeterTextField } from "..";

test("renders PasswordMeterTextField with label", () => {
  render(<PasswordMeterTextField id="password" label="Password" value="" />);
  const labelElement = screen.getByLabelText(/Password/i);

  expect(labelElement).toBeInTheDocument();
});

test("updates strength bars based on password strength", () => {
  render(<PasswordMeterTextField label="Password" value="WeakPassword1" />);
  const strengthBars = screen.getAllByRole("progressbar");

  expect(strengthBars[0]).toHaveStyle({ backgroundColor: "success.main" });
  expect(strengthBars[1]).toHaveStyle({ backgroundColor: "success.main" });
  expect(strengthBars[2]).toHaveStyle({ backgroundColor: "success.main" });
  expect(strengthBars[3]).toHaveStyle({ backgroundColor: "grey.100" });
});
