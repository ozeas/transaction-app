import React, { useState } from 'react';
import { string, func } from 'prop-types';

import { Wrapper, InputStyled, Label } from './input.style';

const Input = ({ id, label, name, type, initialValue, onChange }) => {
  const hasInitialValue = initialValue !== '';
  const [value, setValue] = useState(initialValue);
  const [isActive, setIsActive] = useState(hasInitialValue);

  const handleChange = ({ target }) => {
    const { value } = target;
    onChange(value);
    setValue(value);

    if (value !== '') {
      setIsActive(true);
      return;
    }

    setIsActive(false);
  };

  return (
    <Wrapper>
      <InputStyled
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <Label htmlFor={id} isActive={isActive}>
        {label}
      </Label>
    </Wrapper>
  );
};

Input.defaultProps = {
  id: '',
  name: '',
  type: 'text',
  initialValue: '',
  onChange: () => {},
};

Input.propTypes = {
  id: string,
  label: string.isRequired,
  name: string,
  type: string,
  initialValue: string,
  onChange: func,
};

export default Input;
