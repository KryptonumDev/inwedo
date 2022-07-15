module.exports = {
  siteMetadata: {
    title: `inwedo`,
    siteUrl: `https://inwedo.netlify.app`
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          previewRequestConcurrency: 2,
          timeout: 3000000,
        },
        "url": "https://datainwedo.com/graphql",
        verbose: true,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
          },
        },
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-advanced-sitemap',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://inwedo.netlify.app',
        sitemap: 'https://inwedo.netlify.app/sitemap-index.xml',
        policy: [{ userAgent: 'WhatWeb/0.4.8-dev', allow: '/static', disallow: '/services' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png",
        name: `Inwedo`,
        short_name: `inwedo`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#f8f9fa`,
        display: `standalone`,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MKQG64D",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true, 
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
  ]
};