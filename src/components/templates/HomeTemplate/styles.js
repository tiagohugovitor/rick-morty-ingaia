import styled from 'styled-components';

const HomeContainer = styled.div`
  background-image: url("../../../../assets/home-background.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: auto;
  min-height: 100vh;
  width: 100%;
  filter: ${props => props.loading === "true" ? 'blur(15px)' : 'none'};

  @media(max-width: 800px) {
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

`;

const StyledHomeContent = styled.div`
  margin-top: 100px;

  @media(max-width: 800px) {
    margin-top: 50px;
  }

`;

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 200px;

  @media(max-width: 800px) {
    margin-top: 40px;
    padding-bottom: 60px;
  }
`;

export {
  HomeContainer,
  StyledHomeContent,
  StyledPagination
};
