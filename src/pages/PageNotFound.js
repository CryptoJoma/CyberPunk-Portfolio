import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

const PageNotFound = () => {

    return (
      <div class="mt-36 w-full" style={{opacity: 1, transform: "none"}}>
        <h1 class="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Error <span class="transition-all duration-1000 text-violet-600">404</span></h1>
        <p class="text-gray-800 dark:text-gray-200 mb-6">Page not available</p>
      </div>
    );
};

export default PageNotFound;
