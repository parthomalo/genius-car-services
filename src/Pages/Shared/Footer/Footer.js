import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getUTCFullYear()
    return (
        <footer className='text-center mt-5'>
            <p><small>CopyRight {year}</small></p>
        </footer>
    );
};

export default Footer;