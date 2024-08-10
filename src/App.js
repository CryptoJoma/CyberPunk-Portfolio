import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from "./pages/PageNotFound"; // Error 404
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    return (
      <Router>
        <div class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
          <Navbar />
          <div class="w-[80%] md:w-[45rem]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <div class="w-full flex flex-col items-start border-t-2 border-slate-800 px-4 py-8 dark:border-opacity-50 mt-10">
              <h1 class="text-black dark:text-white/50 text-2xl font-semibold">Joma</h1>
              <h2 class="text-black/60 dark:text-white/30 text-base">DevOps Engineer • 2012 - 2024</h2>
              <div class="flex flex-row gap-x-5 mt-3">
                <a href="https://github.com/CryptoJoma" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 transition-colors ease-in-out duration-200">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                </a>
                <a href="https://twitter.com/JomaDev" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 transition-colors ease-in-out duration-200">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path></svg>
                </a>
                <a href="https://tiktok.com/@JomaDev" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 transition-colors ease-in-out duration-200">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                </a>
                <a href="https://discord.com/users/175327711278006272" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 transition-colors ease-in-out duration-200">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                </a>
                <a href="https://t.me/JomaDev" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-300 transition-colors ease-in-out duration-200">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="h-5 w-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
};

export default App;
