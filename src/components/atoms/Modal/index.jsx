import React, { forwardRef, useCallback, useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { StyledDialogContent } from './styles';

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const withModal = WrappedComponent => props => {
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
      <Dialog
        disableBackdropClick={false}
        keepMounted
        maxWidth='xl'
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {dialogBody}
      </Dialog>
    </>
  )
};

export default withModal;
