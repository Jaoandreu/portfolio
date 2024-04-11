import React from 'react';
import './Projects.css';

function Projects({ title, image, descriptionBold, description, url }) {

  const lines = description.split('\n');
  return (
    <div className="project">
      <div className='container-img'>
        <img src={image} alt={title} />
      </div>
      <div className="title">
        {descriptionBold}
      </div>
      <div className='main-container'>
          <div className="description">
            {lines.map((line, index) => {
              if (line.trim().startsWith('-')) {
                const formattedLine = line.replace('-', '●');
                return (
                  <div key={index} style={{ marginLeft: '25px', marginTop: '5px', whiteSpace: 'pre-line' }}>
                    {formattedLine}
                  </div>
                );
              }
              return (
                <div key={index} style={{ whiteSpace: 'pre-line' }}>
                  {line}
                </div>
              );
            })}
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="button-link">View Project</a>
    </div>
  );
}

export default Projects;