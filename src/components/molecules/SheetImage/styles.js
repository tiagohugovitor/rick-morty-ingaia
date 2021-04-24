import styled from 'styled-components';

const StyledCard = styled.div`
  position: fixed;
  display: flex;
  max-height: 60vh;
  max-width: 25vw;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin-left: -100px;
  vertical-align: middle;
  margin-top: 70px;
`;

const Content = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  background: ${props => props.theme.palette.background.tertiary};
  border: 2px solid ${props => props.theme.palette.border.primary};
  box-sizing: border-box;
  border-radius: 8px;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 8px 8px 0px 0px ;
  box-sizing: border-box;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;
`;

export {
  StyledCard,
  Image,
  Subtitle,
  Content
};
