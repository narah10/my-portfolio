import React from 'react';
import ExperienceItem from './Experience';

const Resume: React.FC = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      <ExperienceItem startDate="Jan 2018" endDate="Present" position="Software Developer" skills={['React', 'TypeScript', 'Node.js']} />
      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />
      <ExperienceItem startDate="Jan 2018" endDate="Present" position="Software Developer" skills={['React', 'TypeScript', 'Node.js']} />
      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />
      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />
      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />
      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />

      <ExperienceItem startDate="May 2016" endDate="Dec 2017" position="Web Designer" skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  );
};

export default Resume;
