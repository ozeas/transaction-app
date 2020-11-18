import React from 'react';
import { fireEvent, waitForElement, act } from '@testing-library/react';

import { renderWithTheme } from '@test/utils';
import Create from './create';

import { fieldsWitchInputsValues, queryByName } from './components/test/mocks';

const setFilledInputs = async (container) => {
  for (let field of Object.entries(fieldsWitchInputsValues)) {
    await act(async () => {
      await fireEvent.change(queryByName(field[0], container), {
        target: { value: field[1] },
      });
    });
  }
};

describe('Create', () => {
  it('should show warning message when error load transactions', async () => {
    const { container, getByText, getByRole } = renderWithTheme(
      <Create createTransaction={jest.fn().mockRejectedValue()} />
    );

    await setFilledInputs(container);

    await act(
      async () => await fireEvent.click(getByRole('button', { type: 'submit' }))
    );

    const message = await waitForElement(
      () => getByText(/Houve um erro ao salvar a transação!/),
      {
        timeout: 10,
      }
    );

    expect(message).toBeInTheDocument();
  });
});
