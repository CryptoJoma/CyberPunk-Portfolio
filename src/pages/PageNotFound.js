import React from 'react';
import { Helmet } from 'react-helmet';

const PageNotFound = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Error 404 - JomaDev",
    "description": "Page not available",
    "url": "https://joma.dev/404",
    "image": "https://joma.dev/logo.png"
  };

  return (
    <div className="mt-36 w-full" style={{ opacity: 1, transform: "none" }}>
      <Helmet>
        <title>{structuredData["name"]}</title>
        <meta name="description" content={structuredData["description"]} />
        <meta name="keywords" content="Joma, CryptoJoma, JomaDev, Portfolio, Web3, Smart Contracts, Blockchain" />
        <link rel="canonical" href="https://joma.dev/404" />
        <meta property="og:title" content={structuredData["name"]} />
        <meta property="og:description" content={structuredData["description"]} />
        <meta property="og:url" content={structuredData["url"]} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={structuredData["image"]} />
        <meta name="twitter:image" content={structuredData["image"]} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={structuredData["url"]} />
        <meta name="twitter:title" content={structuredData["name"]} />
        <meta name="twitter:description" content={structuredData["description"]} />
        <meta name="robots" content="noindex, nofollow" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">
        Error <span className="transition-all duration-1000 text-violet-600">404</span>
      </h1>
      <p className="text-gray-800 dark:text-gray-200 mb-6">Page not available</p>
    </div>
  );
};

export default PageNotFound;
