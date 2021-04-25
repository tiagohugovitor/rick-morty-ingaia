import styled from 'styled-components';

const StyledCard = styled.div`
  position: fixed;
  display: flex;
  max-height: 70vh;
  width: 22vw;
  max-width: 400px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin-left: -100px;
  vertical-align: middle;
  margin-top: 65px;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: ${props => props.theme.palette.background.tertiary};
  border: 2px solid ${props => props.theme.palette.border.primary};
  box-sizing: border-box;
  border-radius: 8px;
`;

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  box-sizing: border-box;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 7px 13px; 
  height: 55px;
`;

const StyledName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.palette.text.white};
  font-size: ${props => props.theme.typography.size.large};
  font-weight: ${props => props.theme.typography.weight.bold};
  line-height: 25px;
  text-overflow: ellipsis;
`;

const StyledSpecie = styled.div`
  line-height: 15px;
`;
export {
  StyledCard,
  StyledSpecie,
  StyledName,
  Image,
  Subtitle,
  Content
};
