import React from 'react';
import { fireEvent, waitForElement, act } from '@testing-library/react';

import { renderWithTheme } from '@test/utils';
import CreateForm from './create-form';
import { randomInputName, fieldsInputs, queryByName } from './test/utils';

const mockCreateTransaction = jest.fn();

const setFilledInputs = async (container) => {
  for (let field of Object.entries(fieldsInputs)) {
    await act(async () => {
      await fireEvent.change(queryByName(field[0], container), {
        target: { value: field[1] },
      });
    });
  }
};

describe('CreateForm', () => {
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

  it.only('should call createTransaction when form is submitted', async () => {
    const { container } = makeComponent();

    await setFilledInputs(container);
    await act(async () => {
      await fireEvent.click(container.querySelector('button'));
    });

    expect(mockCreateTransaction).toHaveBeenCalledWith(fieldsInputs);
    expect(mockCreateTransaction).toHaveBeenCalledTimes(1);
  });
});
