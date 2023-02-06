import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    // console.log(container);

    const emailField = screen.getByRole('textbox', { name: 'E-mail' });

    userEvent.clear(emailField);

    userEvent.type(emailField, 'abcd666');

    fireEvent.blur(emailField);

    expect(screen.getByText('E-mail is invalid')).toBeInTheDocument();

    // expect(screen.getByText(t('do-not-have-an-account') as string)).toBeInTheDocument();
    // expect(screen.getByText(t('do-not-have-an-account') as string)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /send/i }));

  });
});