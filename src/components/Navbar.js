import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
      <div className="hidden z-[999] fixed w-[90%] md:w-[50rem] xs:flex flex-row justify-between items-center px-4 py-2 mt-4 md:mt-6 rounded-md bg-white/60 dark:bg-[#12181d]/60 border border-slate-800/50 backdrop-blur-lg">
        <div className="flex flex-row items-center justify-between gap-2">
          <Link 
            className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-all duration-75 ${currentPath === '/' ? 'bg-black/10 text-black dark:bg-[#c8c8dc]/10 dark:text-white' : 'bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white'}`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-all duration-75 ${currentPath === '/projects' ? 'bg-black/10 text-black dark:bg-[#c8c8dc]/10 dark:text-white' : 'bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white'}`} 
            to="/projects"
          >
            Projects
          </Link>
          <Link 
            className={`cursor-pointer px-4 py-2 text-sm rounded-md transition-all duration-75 ${currentPath === '/contact' ? 'bg-black/10 text-black dark:bg-[#c8c8dc]/10 dark:text-white' : 'bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white'}`} 
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 xs:gap-4">
          <Tooltip title="GitHub">
            <a target="_blank" rel="noreferrer" href="https://github.com/CryptoJoma">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            </a>
          </Tooltip>
          <Tooltip title="Twitter">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/JomaDev">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer hover:fill-white fill-gray-400 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path></svg>
            </a>
          </Tooltip>
          <Tooltip title="Email">
            <a target="_blank" rel="noreferrer" href="mailto:coffee@joma.dev">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 cursor-pointer hover:stroke-white stroke-gray-400 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </Tooltip>
        </div>
      </div>
    );
};

export default Navbar;
