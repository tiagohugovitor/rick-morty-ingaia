import styled from 'styled-components';

const StyledText = styled.span`
  color: ${props => props.theme.palette.text[props.color]};
  font-size: ${props => props.theme.typography.size[props.size]};
`;

export {
  StyledText
};
