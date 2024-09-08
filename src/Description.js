import React from 'react';
import './Description.css';

const Description = () => {
    // Assuming your description is a constant string as mentioned
  const partOne = "My name is Jao Andreu, a web application developer specialized in developing custom solutions using low-code and no-code platforms like Bubble, Xano...";
  const partTwo = "My portfolio includes a variety of projects, from marketplaces to SaaS platforms, where I integrate Figma-designed UI/UX, connect APIs & Plugins, and engineer complex workflows.";
  const partThree = "My expertise extends to database architecture, enriched with custom coding in JavaScript, CSS,  HTML and React."
    return (
        <div className="Description">
          <p style={{ marginBottom: "-10px" }}> 
          {partOne} </p>
          <p style={{ marginBottom: "-10px" }}>{partTwo}</p>
          <p>{partThree}</p>
        </div>
      );
    };
  export default Description;