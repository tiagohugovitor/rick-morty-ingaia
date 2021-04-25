import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

const StyledCharacterCard = styled.div`
  margin: 24px;

  @media(max-width: 800px) {
    margin: 12px;
  }
`;

export {
  StyledList,
  StyledCharacterCard,
};
