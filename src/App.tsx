import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './component/NavBar';
import { AboutMe } from './component/AboutMe';
import Resume from './component/Resume';
import { Project } from './component/Project';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div className='bg-midnight'>
        <div className='mx-auto min-h-screen max-w-screen-xl font-sans lg:px-20'>
          <div className="h-screen grid grid-cols-2 font-sans text-white">
            <div className="lg:sticky lg:w-1/2 lg:py-24">
              <h1 className='text-4xl	font-bold'>Na Rah Hernandez</h1>
              <h2 className='text-2xl	text-accent'>Hi, I'm a Web Developer</h2>
              <p className='text-lg'>Skilled Front-End Developer</p>
              <NavBar
                scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToResume={() => resumeRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToProject={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
            <div className="overflow-y-scroll bg-midnight">
              <div className="">
                <div ref={aboutRef}>
                  <AboutMe />
                </div>
                <div ref={resumeRef}>
                  <Resume />
                </div>
                <div ref={projectRef}>
                  <Project />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
