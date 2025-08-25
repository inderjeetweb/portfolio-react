import React from 'react';

export const TechnicalKnowledge = () => {
  const skills = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax', 'Bootstrap', 'Web Responsive', 'Angular 2+', 'TypeScript'],
    Backend: ['Core PHP', 'Laravel', 'Node.js', 'Express'],
    Server_and_cloud: ['Ubuntu', 'CentOS', 'AWS'],
    Database: ['MySQL', 'MongoDB'],
    Design: ['Adobe Photoshop', 'Illustrator'],
    CMS: ['WordPress'],
  };

  const formatCategory = (category) => category.replace(/_/g, ' '); // replaces underscore with space

  return (
    <div className="card">
      <div className="card-block">
        <h2>Technical Knowledge</h2>
        <div className="list-with-symbol">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="category-block">
              <h3>{formatCategory(category)}</h3>
              <ul className="devid-into-three">
                {items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
