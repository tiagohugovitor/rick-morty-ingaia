import styled from 'styled-components';

const HomeContainer = styled.div`
  background-image: url("../../../../assets/home-background.svg"), linear-gradient(180deg, ${props => props.theme.palette.background.secondary} 0%, ${props => props.theme.palette.background.primary}  100%);;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  filter: ${props => props.loading === "true" ? 'blur(15px)' : 'none'}
`;

const StyledHomeHeader = styled.div`

`;

const StyledHomeContent = styled.div`
  margin-top: 100px;
`;

export {
  HomeContainer,
  StyledHomeHeader,
  StyledHomeContent
};
