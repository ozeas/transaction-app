import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';

import { Box, Button, Flex, Input } from '@components';
import { fields } from './utils';

const CreateForm = ({ createTransaction }) => {
  const { trigger, register, handleSubmit, setValue, formState } = useForm({
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    await createTransaction(data);
  };

  useEffect(() => {
    fields.defaultConfigs.forEach((field) => {
      register(field.identifier, field.validate);
    });
    register(
      fields.currencyConfigs.identifier,
      fields.currencyConfigs.validate
    );
  }, []);

  const handleChange = (name, value, removeMask) => {
    const cleanedValue = removeMask ? removeMask(value) : value;
    setValue(name, cleanedValue.trim());
    trigger();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex flexDirection="column" alignItems="center" mt="88px" width={1}>
        {fields.defaultConfigs.map(
          ({ identifier, label, format, mode, type, removeMask }) => (
            <Box mb={3} key={identifier} width={1}>
              <Input
                type={type}
                name={identifier}
                label={label}
                format={format}
                id={identifier}
                autoComplete="off"
                mask=" "
                mode={mode}
                onChange={(name, value) =>
                  handleChange(name, value, removeMask)
                }
              />
            </Box>
          )
        )}
        <Box mb={3} width={1}>
          <Input
            name={fields.currencyConfigs.identifier}
            label={fields.currencyConfigs.label}
            id={fields.currencyConfigs.identifier}
            autoComplete="off"
            mask=" "
            mode={fields.currencyConfigs.mode}
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            prefix="R$ "
            decimalScale={2}
            onChange={(name, value) =>
              handleChange(name, value, fields.currencyConfigs.removeMask)
            }
          />
        </Box>
        <Box width={1} mt="88px">
          <Button disabled={!formState.isValid} type="submit" width={1}>
            Criar transação
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

CreateForm.propTypes = {
  createTransaction: func,
};

export default CreateForm;
