import React, { FC } from 'react';

interface ExperienceProps {
  startDate: string;
  endDate?: string;
  position: string;
  company: string;
  description: string;
  skills: string[];
}

const Experience: FC<ExperienceProps> = ({ startDate, endDate, position, skills, description, company }) => {
  return (
    <div className="experience-item mt-10 group">
      <div className="date-range">
        <span className="start-date">{startDate}</span>
        {endDate && <span className="separator"> - </span>}
        {endDate && <span className="end-date">{endDate}</span>}
      </div>
      <div className="position group-hover:text-accent">{`${position} | ${company}`}</div>
      <p className='mt-3'>{description}</p>
      <ul className="skills-list grid gap-2 grid-cols-5  mt-2">
        {skills.map((skill, index) => (
          <li className='group-hover:text-accent opacity-75' key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
