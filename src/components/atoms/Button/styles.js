import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.palette.white.main};
  box-sizing: border-box;
  border-radius: 8px;
  color: ${(props) => props.theme.palette.text.white};
  align-items: center;
  height: 100%;
  background: transparent;
  cursor: pointer;
  font-weight: ${(props) => props.theme.typography.weight[props.fontWeight]};;
  font-size: ${(props) => props.theme.typography.size[props.fontSize]};
  line-height: 22px;
  width: 100%;
`;

export {
  StyledButton,
};
