import styled from 'styled-components';

const StyledLoading = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  z-index: 100;
`;

const Icon = styled.img`
  width: 184px;
  height: 184px;
  margin-bottom: 30px;
`

export {
  StyledLoading,
  Icon
};
