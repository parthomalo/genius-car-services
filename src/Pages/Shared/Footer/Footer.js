import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getUTCFullYear()
    return (
        <footer className='text-center  bg-primary d-flex-align-items-end'>
            <p><small>CopyRight {year}</small></p>
        </footer>
    );
};

export default Footer;