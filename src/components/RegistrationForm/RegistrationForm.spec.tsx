import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import fireEvent from "@testing-library/react";
import { RegistrationForm } from "./RegistrationForm";

describe('<RegistrationForm />', () => {
  it('should display error message for email field', () => {
    const onSubmit = jest.fn();
    const defaultValues = {
      email: 'test@wp.pl',
    }
    const { debug, container } = render(
      <RegistrationForm
        defaultValues={defaultValues}
        onSubmit={onSubmit} />
    );
    debug();
    // console.log(container);

    userEvent.type(
      screen.getByRole('textbox', { name: 'E-mail'}),
      'abcd666',
    );
    fireEvent.blur(screen.getByRole('textbox', { name: 'E-mail'}))
    // fireEvent.
    // screen.getByLabelText('E-mail');
    debug();
    userEvent.click(screen.getByRole('button', {  name: /send/i}));
    // userEvent.click(screen.getByText(/send/i));

    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
  });
});