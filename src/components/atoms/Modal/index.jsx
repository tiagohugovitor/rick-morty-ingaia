import React, { forwardRef, useCallback, useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { StyledDialog, StyledDialogContent } from './styles';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    borderRadius: '16px'
  }
}));

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const withModal = WrappedComponent => props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    body: null,
    bodyProps: {}
  });
  const handleClose = useCallback(() => setOpen(false), []);
  const handleShow = useCallback(({
    body = null,
    bodyProps = {}
  }) => {
    setModalData({
      body,
      bodyProps
    });
    setOpen(true);
  }, []);

  const {
    body: Body,
    bodyProps
  } = modalData;

  const dialogBody = modalData.body ? (
    <StyledDialogContent>
      <Body
        closeModal={handleClose}
        {...bodyProps}
      />
    </StyledDialogContent>
  ) : (
    <>
    </>
  );

  return (
    <>
      <WrappedComponent
        {...props}
        closeModal={handleClose}
        showModal={handleShow}
      />
      <StyledDialog
        PaperProps={{ classes: { root: classes.dialogPaper } }}
        disableBackdropClick={false}
        keepMounted
        maxWidth='xl'
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {dialogBody}
      </StyledDialog>
    </>
  )
};

export default withModal;
