import React from 'react';
import ExperienceItem from './Experience';

const Resume: React.FC = () => {
  return (
    <div className='mt-16'>
      <h2 className="text-lg font-semibold text-accent opacity-75">Work Experience</h2>
      <ExperienceItem startDate="April 2023" endDate="Present" position="Student Web Dev Engineer" company='Family Search' description='Collaborate in an Agile environment at FamilySearch in the Home Team, actively managing an average of 2-3 user stories in JavaScript and React based on point allocations each iterations.
Contribute to monthly releases, enhancing accessibility features and navigation elements of site-wide header and footer components actively utilized by 10+ teams.
Participate in the development of a new customizable portal page, introducing a Family Groups widget in 2 iterations.
Implement additional features designed by the UX Design team, enhancing product functionality and user experience of 5 existing widgets on the Logged In Home Page.
Demonstrate strong debugging skills, managing an average of 2 defects per iteration consistently identifying and resolving issues to deliver error-free code.
' skills={['JavaScript','HTML5', 'CSS', 'React', 'TypeScript', 'Node.js']} />
      <ExperienceItem startDate="Jan 2023" endDate="April 2023" position="Full Stack Engineer Intern" company='BYU-Idaho CIT Department' description='Contributed in the development of a student and teacher web application for maintaining virtual machines for courses using React and CSS for the front-end.
 Identified and fixed bugs on the application using React and C# to improve performance of the application.
' skills={['JavaScript','HTML5', 'CSS', 'React', 'C#', 'Node.js', 'Figma']} />
      <ExperienceItem startDate="September 2022" endDate="April 2023" position="Web Design and Development Course Teaching Assistant" company='BYU-Idaho Communication Department' description='Utilized HTML5 and CSS expertise to evaluate 20+  student’s weekly assignments and provide constructive feedback
Assessed and graded assignments of 20+  students per semester, ensuring the quality of their exercise on WordPress
' skills={['HTML', 'CSS', 'JavaScript', 'WordPress']} />
    </div>
  );
};
export default Resume;
