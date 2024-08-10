import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

const Contact = () => {

    // Set timezone to your local_time
    const timezone = 'America/Regina';
    const now = moment().tz(timezone);
    const currentHour = now.hour();

    // Determine the message based on the current time
    const current_status = currentHour >= 9 && currentHour < 21
    ? `awake`
    : `sleeping`;

    const [formData, setFormData] = useState({ email: '', message: '' });
    const [errors, setErrors] = useState({ email: '', message: '' });

    const validate = () => {
        const newErrors = { email: '', message: '' };
        let isValid = true;

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            axios.post('/api/contact.php', formData)
                .then(response => {
                    alert(response.data.message);
                    setFormData({ email: '', message: '' });
                })
                .catch(error => console.error('Error sending message:', error));
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
      <div class="mt-36 w-full" style={{opacity: 1, transform: "none"}}>
        <h1 class="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Let's <span class="transition-all duration-1000 text-violet-600">Chat</span> <span class="pl-1" role="img" aria-label="wave">💬</span></h1>
        <p class="text-gray-800 dark:text-gray-200 mb-6">Have a question or want to connect? Drop a message below or reach out via Discord, Telegram, Twitter, or email!</p>
        <p class="text-black/50 dark:text-white/50 text-sm mb-10">It's currently <span class="font-semibold text-black/60 dark:text-white/60"> {now.format('h:mm A')}</span> for me, so I’m likely <span class="font-semibold text-black/60 dark:text-white/60">{current_status}</span> and will respond as soon as I can!</p>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <div class="md:col-span-2 h-auto min-h-[21.5rem] row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
            <div style={{opacity: 1}}>
            <form onSubmit={handleSubmit}>
                <h1 class="font-bold text-sm dark:text-slate-500 mb-1">EMAIL</h1>
                <input
                    type="email"
                    name="email"
                    class = "w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20 border border-transparent outline-none focus:border-slate-700/50 transition-colors duration-300"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <h1 class="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1>
                <textarea
                    name="message"
                    value={formData.message}
                    class="w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20 border border-transparent outline-none focus:border-slate-700/50 transition-colors duration-300"
                    onChange={handleChange}
                    placeholder="Howdy partner! I'd like a custom project made in python!"
                    required
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
                <div class="w-full flex flex-row justify-between items-center">
                  <p class="text-gray-900 dark:text-gray-300 text-sm"></p>
                  <button type="submit" class="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75">
                    <span class="mt-[2px]">Send</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"></path></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row-start-1 md:row-auto">
            <a target="_blank" rel="noreferrer noopener" class="hover:border-[#5865F2]/50 shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150" href="https://discord.com/users/175327711278006272" style={{transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-6 h-6 text-[#5865F2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
              <h1 class="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">@JomaDev</h1>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a target="_blank" rel="noreferrer noopener" class="hover:border-[#428BCA]/50 shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150" href="https://t.me/JomaDev" style={{transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-6 h-6 text-[#428BCA]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
              <h1 class="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">@JomaDev</h1>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a target="_blank" rel="noreferrer noopener" class="hover:border-[#1DA1F2]/50 shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150" href="https://twitter.com/JomaDev" style={{transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-6 h-6 text-[#1DA1F2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path></svg>
              <h1 class="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">@JomaDev</h1>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a target="_blank" rel="noreferrer noopener" class="hover:border-gray-400/50 shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150" href="mailto:coffee@joma.dev" style={{transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"}}>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <h1 class="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">joma.dev</h1>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
      </div>
      </div>
    );
};

export default Contact;
