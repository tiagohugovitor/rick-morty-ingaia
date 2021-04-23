import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.background.tertiary};
  border: 2px solid ${props => props.theme.palette.border.primary};
  box-sizing: border-box;
  border-radius: 8px;
`;

const Image = styled.img`
  
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;
`;

export {
  StyledCard,
  Image,
  Subtitle
};
