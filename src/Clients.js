import React from 'react';
import './Clients.css';

const Logo = () => {

  const logos = [
    "Logos/Bici.png",
    "Logos/Boatings.jpg",
    "Logos/byDesign.png",
    "Logos/Intuition Wisdom.png",
    "Logos/Metaversity.png",
    "Logos/Om.png",
    "Logos/RAR.jpg",
    "Logos/SoftwareGuide.png",
    "Logos/WeScope.jpg",
  ];
  const allLogos = [...logos, ...logos];

  return (
      <div className="double-marquee-container-client">
        {/* Content of the container */}
        <div className="marquee-client">
          {allLogos.map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="contribution-bubble-client" />
          ))}
        </div>
        {/* Overlay Div */}
        <div className="overlay-client"></div>
      </div>
    );
};

export default Logo;