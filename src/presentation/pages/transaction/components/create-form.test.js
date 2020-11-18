import React from 'react';
import {
  fireEvent,
  waitForElement,
  act,
  cleanup,
} from '@testing-library/react';

import { renderWithTheme, renderWithRouter } from '@test/utils';
import CreateForm from './create-form';
import {
  randomInputName,
  fieldsWitchInputsValues,
  queryByName,
} from './test/mocks';

const mockCreateTransaction = jest.fn();

const setFilledInputs = async (container) => {
  for (let field of Object.entries(fieldsWitchInputsValues)) {
    await act(async () => {
      await fireEvent.change(queryByName(field[0], container), {
        target: { value: field[1] },
      });
    });
  }
};

afterEach(cleanup);

describe('CreateForm', () => {
  jest.spyOn(window, 'fetch');

  const makeComponent = () =>
    renderWithTheme(<CreateForm createTransaction={mockCreateTransaction} />);

  it('should disabled button when load empty form', async () => {
    const { container } = makeComponent();

    const submitButton = await waitForElement(
      () => container.querySelector('button'),
      { container, timeout: 1 }
    );

    expect(submitButton.disabled).toBe(true);
  });

  it('should enabled button when all fields is filled', async () => {
    const { container } = makeComponent();

    await setFilledInputs(container);

    const submitButton = await waitForElement(
      () => container.querySelector('button'),
      { container, timeout: 2000 }
    );

    expect(submitButton).not.toBeDisabled();
  });

  it('should disabled button when any input is empty', async () => {
    const { container } = makeComponent();

    await setFilledInputs(container);
    await act(async () => {
      await fireEvent.change(queryByName(randomInputName, container), {
        target: { value: '' },
      });
    });

    const submitButton = await waitForElement(
      () => container.querySelector('button'),
      { container, timeout: 1 }
    );

    expect(submitButton.disabled).toBe(true);
  });

  it('should call createTransaction when form is submitted', async () => {
    const { container } = makeComponent();

    await setFilledInputs(container);
    await act(async () => {
      await fireEvent.click(container.querySelector('button'));
    });

    expect(mockCreateTransaction).toHaveBeenCalledWith(fieldsWitchInputsValues);
    expect(mockCreateTransaction).toHaveBeenCalledTimes(1);
  });

  it('should not redirect when error response post request', async () => {
    const createTransaction = () => Promise.reject();

    const { history, getByRole, container } = renderWithRouter(
      <CreateForm createTransaction={createTransaction} />
    );

    await setFilledInputs(container);

    await act(
      async () => await fireEvent.click(getByRole('button', { type: 'submit' }))
    );

    expect(history.location.pathname).toEqual('/');
  });

  it('should redirect when success post request', async () => {
    const createTransaction = () => Promise.resolve();

    const { history, getByRole, container } = renderWithRouter(
      <CreateForm createTransaction={createTransaction} />
    );

    await setFilledInputs(container);

    await act(
      async () => await fireEvent.click(getByRole('button', { type: 'submit' }))
    );

    expect(history.location.pathname).toEqual('/list');
  });
});
