import styled from 'styled-components';

const Logo = styled.img`
  height: auto;
  max-width: 502px;
  width: 70vw;
  animation: topDown 2s ease;
  transform-origin: left top;
  
  @keyframes topDown{
    0%{
      transform: scaleY(0);
    }
    100%{
      transform: scaleY(1);
    }
  }
`;

const StyledSearchBar = styled.div`
  padding-top: 75px;
  animation: leftRight 2s ease;
  transform-origin: left top;
  
  @keyframes leftRight{
    0%{
      transform: scaleX(0);
    }
    100%{
      transform: scaleX(1);
    }
  }

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
