import styled from 'styled-components';

const LocationContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;  
`;

const StyledLocationDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;

`;

const Title = styled.div`
  letter-spacing: 0.65em;
  line-height: 18px;
`;

const ResidentsDecription = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
`;

const StyledResidentsIcon = styled.img`
  padding-right: 10px;
`;

export {
  LocationContainer,
  StyledLocationDescription,
  Title,
  ResidentsDecription,
  StyledResidentsIcon
};
