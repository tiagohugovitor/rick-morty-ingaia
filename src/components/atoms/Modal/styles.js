import styled from 'styled-components';
import { Dialog, DialogContent } from '@material-ui/core';

const StyledDialogContent = styled(DialogContent)`
  padding: 0px !important;
  border-radius: 16px;
  @media(max-width: 800px) {
    width: 80vw;
  }
`;

const StyledDialog = styled(Dialog)`
  overflow-x: hidden !important;
  border-radius: 16px;
  @media(max-width: 800px) {
    margin-top: 100px;
  }
`;

export {
  StyledDialog,
  StyledDialogContent
};
