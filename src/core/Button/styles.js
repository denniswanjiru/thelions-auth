import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  margin-top: ${props => props.mt || 0}px;
  margin-left: ${props => props.ml || 0}px;
  margin-right: ${props => props.mr || 0}px;
  margin-bottom: ${props => props.mb || 0}px;

  ${props => props.size && props.size};
  ${props => props.shape && props.shape};
  ${props => props.buttonType && props.buttonType};

  ${props => !!(props.loading || props.disabled) && css`
    opacity: .5;
    cursor: default;
  `};

  ${props => props.block && css`
    width: 100%;
  `};
`;

export default StyledButton;