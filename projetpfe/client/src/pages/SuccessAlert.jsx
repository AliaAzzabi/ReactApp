// SuccessAlert.js
import React from 'react';

const SuccessAlert = ({ children }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      <p>{children}</p>

    </Alert>
   </Stack>
  );
};

export default SuccessAlert;
