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
`;

const AnimationText = styled.div`
  overflow: hidden;
  border-right: .15em solid ${(props) => props.theme.palette.primary.main};
  white-space: nowrap;
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation:
    typing 2.5s steps(20, end) infinite,
    blink-caret .75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 110px }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${(props) => props.theme.palette.primary.main}; }
  }
`;

export {
  StyledLoading,
  Icon,
  AnimationText,
};
