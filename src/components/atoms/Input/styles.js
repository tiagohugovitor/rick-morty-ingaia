import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid ${props => props.theme.palette.white.main};
  box-sizing: border-box;
  border-radius: 8px;
  color: ${props => props.theme.palette.text.primary};
  padding: 10px 14px;
  background: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.theme.typography.size.medium};
  line-height: 22px;
`;


export {
  StyledInput,
}
