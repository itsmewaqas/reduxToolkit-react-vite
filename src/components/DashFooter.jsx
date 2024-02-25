import React, { useState } from 'react';

function DashFooter() {

    return (
        <div className='dFooter'>
            <p>© {(new Date().getFullYear())} CRM All rights reserved.</p>
        </div>
    );
}

export default DashFooter;