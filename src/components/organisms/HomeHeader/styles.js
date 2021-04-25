import styled from 'styled-components';

const Logo = styled.img`
  height: auto;
  max-width: 502px;
  width: 70vw;
`;

const StyledSearchBar = styled.div`
  padding-top: 75px;

  @media(max-width: 800px) {
    padding-top: 50px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  Logo,
  StyledSearchBar,
  HeaderContent,
};
