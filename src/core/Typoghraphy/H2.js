import styled from 'styled-components';
import spitCommonProps from './helpers';
import devices from '../../utils/breakpoints';

const H2 = styled.h2`
  font-size: 2.25em; /* 36px */
  line-height: 1.25em;
  ${props => spitCommonProps(props)};

  @media(${devices.tablet}) {
    font-size: 2em; /* 32px */
    line-height: 1.25em;
  };

  @media(${devices.phone}) {
    font-size: 1.625em; /* 26px */
    line-height: 1.15384615em;
  };
`;

export default H2;