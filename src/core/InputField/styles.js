import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
`;

StyledInput.Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 10px;
`;

StyledInput.Input = styled.input`
  height: 40px;
  outline: none;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 4px;
  border: solid 1px #ccc;

  &:focus {
    border-color: #807be3;
  }
`;

StyledInput.Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export default StyledInput;