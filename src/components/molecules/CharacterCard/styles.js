import styled from 'styled-components';

const CardContainer = styled.div`
  height: 224px;
  width: 224px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.palette.background.tertiary};
  border: 2px solid ${props => props.theme.palette.border.primary};
  box-sizing: border-box;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 224px;
  height: 169px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  padding-top: 7px;
`;

export {
  CardContainer,
  Image,
  Subtitle
};
