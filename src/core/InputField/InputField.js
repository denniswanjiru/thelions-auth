import React from 'react'
import StyledInput from './styles';

const InputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <StyledInput>
      <StyledInput.Label>{props.label}</StyledInput.Label>
      <StyledInput.Input {...field} {...props} />
      <StyledInput.Error>{errorMsg && errorMsg}</StyledInput.Error>
    </StyledInput>
  );
};

export default InputField;
