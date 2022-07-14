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
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
          {
            allWpPage{
              edges{
                node{
                  id
                  slug
                }
              }
            }
            allWpPost{
              edges{
                node{
                  id
                  slug
                }
              }
            }
            allWpTechnology{
              edges{
                node{
                  id
                  slug
                }
              }
            }
            allWpCaseStudies{
              edges{
                node{
                  id
                  slug
                }
              }
            }
            allWpJobOffer{
              edges{
                node{
                  id
                  slug
                }
              }
            }
            allWpCareerPath{
              edges{
                node{
                  id
                  slug
                }
              }
            }
          }
        `,
        output: '/sitemap-index.xml',
        mapping: {
          allWpPost: {
            sitemap: 'posts'
          },
          allWpPage: {
            sitemap: 'pages'
          },
          allWpTechnology: {
            sitemap: 'pages'
          },
          allWpCaseStudies: {
            sitemap: 'pages'
          },
          allWpJobOffer: {
            sitemap: 'pages'
          },
          allWpCareerPath: {
            sitemap: 'pages'
          },
        },
        addUncaughtPages: true
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", 
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://inwedo.netlify.app',
        sitemap: 'https://inwedo.netlify.app/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
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