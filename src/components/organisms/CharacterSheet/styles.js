import styled from 'styled-components';

const SheetContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 65vw;
  max-width: 1200px;
  margin-left: -20px;
  border-radius: 16px;
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
`;

const ColorFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px 0px 0px 16px;
`;

const ImageContent = styled.div`
  position: relative;
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 16px 0px 0px 16px;
`;

const DescriptionBackground = styled.div`
  z-index: 100;
  background-color: ${props => props.theme.palette.black.main};
  padding: 70px 55px;
  width: 60%;
`;

const Content = styled.div`
  z-index: 100;
  height: 100%;
  width: 84px;
  height: 42px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export {
  SheetContainer,
  ImageBackground,
  DescriptionBackground,
  ImageContent,
  Content,
  ColorFilter
};
