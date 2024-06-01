import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AlertDialog = ({ state, severity, message }) => {

  const [open, setOpen] = useState(state);

  // Update the local state when the prop changes
  useEffect(() => {
    setOpen(state);
  }, [state]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  console.log("first",{ state, severity, message }, open)

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose} // Properly call the handleClose function
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertDialog;
