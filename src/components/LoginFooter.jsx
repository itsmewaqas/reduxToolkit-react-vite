import React, { useState } from 'react';

function LoginFooter(props) {

  return (
    <div className='loginFooter'>
      <p>© {(new Date().getFullYear())} CRM All rights reserved.</p>
    </div> 
  );
}

export default LoginFooter;