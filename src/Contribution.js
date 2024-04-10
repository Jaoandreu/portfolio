import React from 'react';
import './Contribution.css';

const Contribution = () => {

  const contributions = [
    "Bubble to Xano Migration",
    "OpenAI API Integration",
    "App Store and Google Play",
    "Business Analytics",
    "Scalable SaaS Architecture",
    "Complex business logic",
    "Custom Plugins"
  ];
  const allContributions = [...contributions, ...contributions];

  const contributions2 = [
    "Automated Data Security",
    "Advanced Search and Filtering",
    "Internal Communication Tools",
    "Email and Phone Verification Automation",
    "Two-Factor Authentication (2FA)",
    "File Migration AWS S3/Google Cloud",
  ];
  const allContributions2 = [...contributions2, ...contributions2];

  const contributions3 = [
    "Social Media Authentication",
    "Responsive UX/UI Design",
    "Automated Email, SMS, and Slack Interactions",
    "Calendar-Based Booking Systems",
    "Auth Token Management",
    "Xano Realtime Data"
  ];
  const allContributions3 = [...contributions3, ...contributions3];


  return (
    <div className="double-marquee-container">
      {/* Transparent base layer with content */}
      <div className="content-wrapper">
        <div className="marquee">
          {allContributions.map((contribution, index) => (
            <div key={index} className="contribution-bubble">{contribution}</div>
          ))}
        </div>
        <div className="marquee2">
          {allContributions2.map((contribution2, index) => (
            <div key={index} className="contribution-bubble">{contribution2}</div>
          ))}
        </div>
        <div className="marquee">
          {allContributions3.map((contribution3, index) => (
            <div key={index} className="contribution-bubble">{contribution3}</div>
          ))}
        </div>
      </div>
      {/* Overlay with gradient */}
      <div className="gradient-overlay"></div>
    </div>
  );

          }
  
  export default Contribution;