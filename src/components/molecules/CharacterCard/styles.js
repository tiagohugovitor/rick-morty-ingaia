import styled, {css} from 'styled-components';

const CardContainer = styled.div`
  height: 224px;
  width: 224px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.palette.background.tertiary};
  border: 2px solid ${(props) => props.theme.palette.border.primary};
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;

${(props) => props.selected === 'true' && css`
  border: 2px solid ${(props) => props.theme.palette.primary.main};;
  box-sizing: border-box;
  box-shadow: '0px 0px 0px 3px
    ${(props) => props.theme.palette.primary.secondary};,
    0px 0px 5px 4px ${(props) => props.theme.palette.primary.secondary};,
    inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6)
  ';
  border-radius: 8px;
`}

@media(max-width: 800px) {
  width: 255px;
  height: 223px;

  ${(props) => props.isMiniCard === 'true' && css`
    height: 173px;
    width: 178px;
  `}
}
`;

const Image = styled.img`
  width: 100%;
  height: 169px;
  border-radius: 6px 6px 0px 0px;

  @media(max-width: 800px) {
  ${(props) => props.isMiniCard === 'true' && css`
    height: 120px;
  `}
}
`;

const StyledName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.palette.text.white};
  font-size: ${(props) => props.theme.typography.size.large};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  line-height: 25px;
  text-overflow: ellipsis;
`;

const StyledSpecie = styled.div`
  line-height: 15px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  height: 55px;
  padding-top: 5px;
`;

export {
  CardContainer,
  Image,
  Subtitle,
  StyledSpecie,
  StyledName,
};
