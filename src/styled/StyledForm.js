import styled from 'styled-components';

const StyledForm =  styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.marginRight || 0}px;
`;

StyledForm.FormTitle = styled.h2`
  font-size: 23px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export default StyledForm;