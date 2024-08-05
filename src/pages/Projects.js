import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects.php')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
      <div class="mt-36" style={{opacity: 1, transform: "none"}}>
        <h1 class="text-black dark:text-white font-bold text-3xl mb-3 mt-8">All of my <span class="transition-all duration-1000 text-violet-600">projects</span> <span class="pl-1" role="img" aria-label="wave">🤖</span></h1>
        <p class="text-gray-800 dark:text-gray-200 mb-6">Here is where you can find all of the projects that I have worked on that I want to be publicly known. I have worked on many projects, but these are the ones that I am most proud of.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <div class="mt-4 md:w-[225px] w-full" style={{opacity: 1, transform: "none"}}>
            <a href="https://licensechain.app" target="_blank" rel="noreferrer" class="block h-full bg-slate-950 w-full rounded-md overflow-hidden border-2 border-zinc-800/80 hover:-translate-y-1 duration-300" draggable="false">
              <img draggable="false" class="border-b-2 border-zinc-800/80 h-[175px] w-full mx-auto" alt="image" src="https://licensechain.app/theme/licensechain/assets/logo.png"/>
              <h2 class="text-white font-bold text-2xl font-kanit pl-4 pt-4"> LicenseChain</h2>
              <p class="text-white text-lg pt-2 font-kanit px-4 pb-4 whitespace-normal">LicenseChain is an open-source authentication system with client SDKs for Python, JavaScript and PHP.</p>
            </a>
          </div>
        </div>
        <hr class="w-full border border-white border-opacity-25 mt-10 mb-10 opacity-25" />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
        {projects.map(project => (
            <div key={project.id} className="project" style={{opacity: 1, transform: "none"}}>
                <a href={project.link} rel="noreferrer" target="_blank">
                    <div class="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-zinc-800/80 hover:-translate-y-1 duration-300 cursor-pointer">
                        <h1 class="font-semibold mb-1">{project.title}</h1>
                        <p class="text-sm text-gray-800/70 dark:text-gray-100/70">{project.description}</p>
                        <div class="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
                            <p class="flex flex-row items-center">
                                <div class="w-3 h-3 rounded-full mr-1" style={{background: "rgb(53, 114, 165); border: 3px solid rgb(53, 114, 165)"}}></div>{project.used_languages}</p>
                            <p class="flex flex-row items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>                        4</p>
                            <p class="flex flex-row items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="mr-1 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z"></path></svg>                        1</p>
                        </div>
                    </div>
                </a>
            </div>
        ))}
        </div>
      </div>

    );
};

export default Projects;
