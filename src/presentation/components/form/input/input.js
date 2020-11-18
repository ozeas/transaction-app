import React, { useState, forwardRef } from 'react';
import { string, func, oneOf } from 'prop-types';

import { Wrapper, InputStyled, InputStyledMasked, Label } from './input.style';

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  ({ label, id, initialValue, mode, onChange, ...props }, ref) => {
    const hasInitialValue = initialValue !== '';
    const [value, setValue] = useState(initialValue);
    const [isActive, setIsActive] = useState(hasInitialValue);

    const handleChange = ({ target }) => {
      const { name, value } = target;
      onChange(name, value);
      setValue(value);

      if (value !== '') {
        setIsActive(true);
        return;
      }

      setIsActive(false);
    };

    return (
      <Wrapper>
        {mode === 'default' ? (
          <InputStyled
            ref={ref}
            inputRef={(el) => (this.inputElem = el)}
            onChange={handleChange}
            value={value}
            {...props}
          />
        ) : (
          <InputStyledMasked
            ref={ref}
            onChange={handleChange}
            value={value}
            {...props}
          />
        )}
        <Label htmlFor={id} isActive={isActive}>
          {label}
        </Label>
      </Wrapper>
    );
  }
);

Input.defaultProps = {
  id: '',
  initialValue: '',
  mode: 'default',
  onChange: () => {},
  type: 'text',
};

Input.propTypes = {
  id: string,
  initialValue: string,
  label: string.isRequired,
  mode: oneOf(['default', 'masked']),
  onChange: func,
  type: string,
};

export default Input;
