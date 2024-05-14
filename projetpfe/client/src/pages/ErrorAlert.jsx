// ErrorAlert.js
import React from 'react';

const ErrorAlert = ({ children }) => {
  return (
    <div className="alert error">
      <span>{children}</span>
    </div>
  );
};

export default ErrorAlert;
