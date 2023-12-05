import React, { ReactEventHandler } from 'react';

interface NavBarProps {
  scrollToAbout: ReactEventHandler;
  scrollToResume: ReactEventHandler;
  scrollToProject: ReactEventHandler;
}

export function NavBar({ scrollToAbout, scrollToResume, scrollToProject }: NavBarProps) {
  return (
    <nav className='mt-16 w-max'>
      <a className='hover:text-accent active:text-accent group flex items-center py-3 cursor-pointer' onClick={scrollToAbout}>About</a>
      <a className='hover:text-accent group flex items-center py-3 cursor-pointer' onClick={scrollToResume}>Experience</a>
      <a className='hover:text-accent group flex items-center py-3 cursor-pointer' onClick={scrollToProject}>Projects</a>
    </nav>
  );
}
