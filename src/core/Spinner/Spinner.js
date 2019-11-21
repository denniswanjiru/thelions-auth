import styled from 'styled-components';

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  border-top: 2px solid whitesmoke;
  animation: spin 2s linear infinite;
  -webkit-animation: spin 2s linear infinite; /* Safari */

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Spinner;