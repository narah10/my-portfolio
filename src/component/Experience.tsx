import React, { FC } from 'react';

interface ExperienceProps {
  startDate: string;
  endDate?: string;
  position: string;
  skills: string[];
}

const Experience: FC<ExperienceProps> = ({ startDate, endDate, position, skills }) => {
  return (
    <div className="experience-item">
      <div className="date-range">
        <span className="start-date">{startDate}</span>
        {endDate && <span className="separator"> - </span>}
        {endDate && <span className="end-date">{endDate}</span>}
      </div>
      <div className="position">{position}</div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
