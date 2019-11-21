import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.color || '#4040fe'};
  margin-left: ${props => props.marginleft || 0}px;
  margin-right: ${props => props.marginright || 0}px;
`;