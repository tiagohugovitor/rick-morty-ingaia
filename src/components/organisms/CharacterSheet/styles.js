import styled from 'styled-components';

const SheetContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBackground = styled.div`
  position: absolute;
  background-image: url(${props => props.image});
  background-size: cover;
  filter: blur(15px);
  width: 100%;
  height: 100%;
`;

const ImageContent = styled.div`
  position: relative;
  width: 40%;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const DescriptionBackground = styled.div`
  background-color: ${props => props.theme.palette.black.main};
  padding: 70px 55px;
  width: 60%;
`;

const Content = styled.div`
  z-index: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export {
  SheetContainer,
  ImageBackground,
  DescriptionBackground,
  ImageContent,
  Content
};
