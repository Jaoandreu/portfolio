import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-design"></div>
            <div className="footer-text" style={{ textAlign: 'left', paddingLeft: '10px' }}>Let's Work Together!</div>
            <div className="footer-icon-email" style={{ textAlign: 'left', fontSize: '20px', paddingLeft: '10px' }}><i className="fas fa-envelope" style={{ paddingRight: '10px' }}></i>contact@websolutions-consultant.com</div>
            <div className="footer-icon-email" style={{ textAlign: 'left', fontSize: '20px', marginTop: '15px', paddingLeft: '10px' }}><i className="fas fa-map-marker-alt" style={{ paddingRight: '10px' }}></i> Eastern Timezone</div>
        </div >
    );
};

export default Footer;