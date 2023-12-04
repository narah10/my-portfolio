import React from 'react';
import { NavBar } from './component/NavBar';
import { AboutMe } from './component/AboutMe';
import Resume from './component/Resume';
import { Project } from './component/Project';
function App() {
  return (
    <div className='bg-midnight'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className="h-screen flex font-sans text-white">
          <div className="lg:sticky lg:w-1/2 lg:py-24">
            <h1 className='text-4xl	font-bold'>Na Rah Hernandez</h1>
            <h2 className='text-2xl	text-accent'>Hi, I'm a Web Developer</h2>
            <p className='text-lg'>Dedicated front-end web developer with experience <br></br> in JavaScript and React </p>
            <NavBar/>
          </div >
          <div className="flex-1 flex overflow-hidden bg-midnight">
            <div className="flex-1 overflow-y-scroll">
              <AboutMe/>
              <Resume />
              <Project />
            </div>
          </div>
        </div>
    </div>
    </div>
    
    
  );
}

export default App;
