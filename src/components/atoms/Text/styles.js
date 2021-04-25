import styled from 'styled-components';

const StyledText = styled.span`
  color: ${(props) => props.theme.palette.text[props.color]};
  font-size: ${(props) => props.theme.typography.size[props.size]};
  font-weight: ${(props) => props.theme.typography.weight[props.fontWeight]};
`;

export {
  StyledText,
};
