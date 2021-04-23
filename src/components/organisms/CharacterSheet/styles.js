import styled from 'styled-components';

const SheetContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 40%;
`;

const DescriptionBackground = styled.div`
  background-color: ${props => props.theme.palette.black.main};
  padding: 70px 55px;
  width: 60%;
`;

export {
  SheetContainer,
  ImageBackground,
  DescriptionBackground
};
