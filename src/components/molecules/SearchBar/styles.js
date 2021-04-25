import styled from 'styled-components';

const SearchBarContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 350px;

`;

const SearchBarInput = styled.div`
  margin: 0px 8px;
  max-width: 245px;
  min-width: 164px;
  width: 45vw;

  @media(max-width: 800px) {
    margin: 0px 4px;
  }
`;

const SearchBarButton = styled.div`
  margin: 0px 8px;
  max-width: 92px;
  min-width: 84px;
  width: 20vw;

  @media(max-width: 800px) {
    margin: 0px 4px;
  }
`;

export {
  SearchBarContent,
  SearchBarInput,
  SearchBarButton
}
