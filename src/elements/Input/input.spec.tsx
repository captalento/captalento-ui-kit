import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Input } from '.';

describe('Page SignUp', () => {
  it('Deve modificar o valor do input', async () => {
    render(<Input id="username" placeholder="username" name="username" />);

    const inputName = screen.getByPlaceholderText(/username/i);
    userEvent.type(inputName, 'Larry');

    expect(inputName).toBeVisible();
    await waitFor(() => expect(inputName).toHaveValue('Larry'));
  });

  it('Deve rederizar a menssagem de erro', async () => {
    render(
      <Input
        id="username"
        placeholder="username"
        name="username"
        error="Error"
      />
    );

    const errorMessage = screen.getByText(/Error/i);

    expect(errorMessage).toBeVisible();
  });
});
