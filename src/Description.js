import React from 'react';
import './Description.css';

const Description = () => {
    // Assuming your description is a constant string as mentioned
  const partOne = "My name is Jao, a web application developer specialized in developing custom solutions using the Bubble and Xano platforms.";
  const partTwo = "My portfolio encompasses a broad range of projects, from marketplaces to SaaS platforms, where I integrate Figma-designed UI/UX, connect APIs & Plugins, and engineer complex workflows. My expertise extends to database architecture, enriched with custom coding in JavaScript, CSS,  HTML and React.js.";
    return (
        <div className="Description">
          <p style={{ marginBottom: "-10px" }}> 
          {partOne} </p>
          <p>{partTwo}</p>
        </div>
      );
    };
  export default Description;