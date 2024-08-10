import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubProjects from '../components/GitHubProjects'; // Adjust the path as needed

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
        <h1 class="text-black dark:text-white font-bold text-3xl mb-3 mt-8">My <span class="transition-all duration-1000 text-violet-600">Project</span> Portfolio <span class="pl-1" role="img" aria-label="wave">🤖</span></h1>
        <p class="text-gray-800 dark:text-gray-200 mb-6">Here you'll find a showcase of projects I've worked on that I want to share publicly. While I've been involved in many projects, these are the ones I'm most proud of.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {projects.map(project => (
            <div key={project.id} class="mt-4 md:w-[225px] w-full" style={{opacity: 1, transform: "none"}}>
            <a href={project.url} target="_blank" rel="noreferrer" class="block h-full bg-slate-950 w-full rounded-md overflow-hidden border-2 border-zinc-800/80 hover:-translate-y-1 duration-300" draggable="false">
              <img draggable="false" class="border-b-2 border-zinc-800/80 h-[175px] w-full mx-auto" alt={project.title} src={project.image}/>
              <h2 class="text-white font-bold text-2xl font-kanit pl-4 pt-4"> {project.title}</h2>
              <p class="text-white text-lg pt-2 font-kanit px-4 pb-4 whitespace-normal">{project.description}</p>
            </a>
          </div>
          ))}

        </div>
        <hr class="w-full border border-white border-opacity-25 mt-10 mb-10 opacity-25" />
        <GitHubProjects />
      </div>

    );
};

export default Projects;
