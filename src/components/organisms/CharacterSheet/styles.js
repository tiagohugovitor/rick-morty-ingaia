import styled from 'styled-components';

const SheetContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 65vw;
  max-width: 1200px;
  margin-left: -20px;
  border-radius: 16px;
  display: block;

  @media(max-width: 800px) {
    display: none;
  }
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  border-radius: 16px 0px 0px 16px;
  
  @media(max-width: 800px) {
    bottom: 0px;
    width: 100%;
    height: 75%;
    padding: 0px;
    border-radius: 16px 16px 0px 0px;
  }

`;

const ColorFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px 0px 0px 16px;

  @media(max-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 16px 16px 0px 0px;
  }
`;

const ImageContent = styled.div`
  position: relative;
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 16px 0px 0px 16px;

  @media(max-width: 800px) {
    position: relative;
    width: 100%;
    height: 60px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    border-radius: 16px 16px 0px 0px;
  }
`;

const DescriptionBackground = styled.div`
  z-index: 100;
  background-color: ${props => props.theme.palette.black.main};
  padding: 70px 55px;
  width: 60%;

  @media(max-width: 800px) {
    width: 60vw;
    padding-left: 20px;
    padding-top: 50px;
  }
`;

const Content = styled.div`
  z-index: 100;
  height: 100%;
  width: 84px;
  height: 42px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  @media(max-width: 800px) {
    position: fixed;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: -120px;
  }
`;

const StyledCloseIcon = styled.div`
  color: ${props => props.theme.palette.white.main};
  cursor: pointer;
`;

const StyledCharacterCard = styled.div`
  width: 85vw;
  top: 35px;
  position: absolute;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SheetContainerMobile = styled.div`
  display: none;
  width: 80vw;
  height: 100%;
  border-radius: 16px;
  overflow-x: hidden !important;

  @media(max-width: 800px) {
    display: block;
  }
`;

export {
  SheetContainerDesktop,
  ImageBackground,
  DescriptionBackground,
  ImageContent,
  Content,
  ColorFilter,
  SheetContainerMobile,
  StyledCloseIcon,
  StyledCharacterCard
};
