import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid ${props => props.theme.palette.white.main};
  box-sizing: border-box;
  border-radius: 8px;
  color: ${props => props.theme.palette.text.white};
  padding: 10px 17px;
  background: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.theme.typography.size.medium};
  line-height: 22px;
`;

export {
  StyledButton,
}
