const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

import { urlSystem } from './src/contstants/urlSystem'

exports.createPages = async ({
    graphql,
    actions: { createPage, createRedirect },
  }) => {
  
    const defaultLocale = 'en';
  
    const secondaryLanguages = ['pl'];
  
    secondaryLanguages.forEach((language) => {
      const langCode = language.split('-')[0];
  
      createRedirect({
        fromPath: '/',
        toPath: `/${language}/`,
        isPermanent: false,
        conditions: {
          language: [langCode],
        },
      });
    });
  
    // HOMEPAGE
  
    const { data: { allWpPage: { homepageNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Homepage"}}}) {
                homepageNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    homepageNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.homepage[slug],
        component: resolve('src/templates/homepage.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES
  
    const { data: { allWpPage: { servicesNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Services"}}}) {
                servicesNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    servicesNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.services[slug],
        component: resolve('src/templates/services.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // CONTACT
  
    const { data: { allWpPage: { contactNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Contact"}}}) {
                contactNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    contactNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.contact[slug],
        component: resolve('src/templates/contact.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // ABOUT
  
    const { data: { allWpPage: { aboutNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "About"}}}) {
                aboutNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    aboutNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.aboutUs[slug],
        component: resolve('src/templates/about.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // HOW WE WORK
  
    const { data: { allWpPage: { howWeWorkNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "How We Work"}}}) {
                howWeWorkNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    howWeWorkNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.HowWeWork[slug],
        component: resolve('src/templates/how-we-work.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - DISCOVERY WORKSHOP
  
    const { data: { allWpPage: { workshopNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Discovery Workshop"}}}) {
                workshopNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    workshopNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.discoveryWorkshop[slug],
        component: resolve('src/templates/discovery-workshop.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - WEB APP
  
    const { data: { allWpPage: { webAppNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Web App"}}}) {
                webAppNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    webAppNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.webAppDevelopment[slug],
        component: resolve('src/templates/web-app.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - AGILE TEAMS
  
    const { data: { allWpPage: { agileTeamsNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Agile Teams"}}}) {
                agileTeamsNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    agileTeamsNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.agileTeamsOnDemand[slug],
        component: resolve('src/templates/agile-teams.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - TEAM EXTENSIONS
  
    const { data: { allWpPage: { teamExtensionsNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Team Extensions"}}}) {
                teamExtensionsNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    teamExtensionsNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.teamExtensions[slug],
        component: resolve('src/templates/team-extensions.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - PRODUCT DESIGN
  
    const { data: { allWpPage: { productDesignNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Product Design"}}}) {
                productDesignNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    productDesignNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.productDesign[slug],
        component: resolve('src/templates/product-design.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // SERVICES - PRODUCT DEVELOPMENT
  
    const { data: { allWpPage: { productDevelopmentNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Product Development"}}}) {
                productDevelopmentNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    productDevelopmentNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.productDevelopment[slug],
        component: resolve('src/templates/product-development.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // TECHNOLOGIES
  
    const { data: { allWpTechnology: { technologiesNodes } } } = await graphql(`
            {
              allWpTechnology(filter: {template: {templateName: {eq: "Technology"}}}) {
                technologiesNodes: nodes {
                  id
                  language {
                    slug
                  }
                  technology{
                    currentPageUrl
                  }
                }
              }
            }
          `);
  
    technologiesNodes.forEach(({ id, language: { slug }, technology: { currentPageUrl } }) => {
      createPage({
        path: urlSystem.technologies[slug] + currentPageUrl,
        component: resolve('src/templates/technology.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // PORTFOLIO ARCHIVE
  
    const { data: { allWpPage: { portfolioArchiveNodes } } } = await graphql(`
            {
              allWpPage(filter: {template: {templateName: {eq: "Portfolio Archive"}}}) {
                portfolioArchiveNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
  
  
    const { data: { categoryParents: { categoryArchiveNodes } } } = await graphql(`
    {
      categoryParents: allWpCategoryPortfolio(
        filter: {wpParent: {node: {slug: {eq: null}}}}
      ) {
        categoryArchiveNodes: nodes {
          catSlug: slug
          language {
            slug
          }
        }
      }
    }
    `);
  
    portfolioArchiveNodes.forEach(({ id, language: { slug } }) => {
  
      createPage({
        path: urlSystem.caseStudies[slug],
        component: resolve('src/templates/portfolio-archive.jsx'),
        context: {
          id,
          slug,
        },
      });
  
  
      categoryArchiveNodes.forEach(({ language: { catLangSlug }, catSlug }) => {
        createPage({
          path: urlSystem.caseStudies[slug] + catSlug,
          component: resolve('src/templates/portfolio-archive.jsx'),
          context: {
            id,
            slug,
          },
        });
      });
    });
  
    // PORTFOLIO PAGE (CASE STUDIES)
  
    const { data: { allWpCaseStudies: { portfolioPageNodes } } } = await graphql(`
            {
              allWpCaseStudies {
                portfolioPageNodes: nodes {
                  id
                  language {
                    slug
                  }
                  caseStudies {
                    currentPostUrl
                  }
                }
              }
            }
          `);
  
    portfolioPageNodes.forEach(({ id, language: { slug }, caseStudies: { currentPostUrl } }) => {
      createPage({
        path: urlSystem.caseStudies[slug] + currentPostUrl,
        component: resolve('src/templates/portfolio-post.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // BLOG ARCHIVE
  
    const { data: { allWpPage: { blogArchiveNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Blog Archive"}}}) {
                blogArchiveNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    blogArchiveNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.blog[slug],
        component: resolve('src/templates/blog-archive.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // BLOG PAGE (POST)
  
    const { data: { allWpPost: { PostPageNodes } } } = await graphql(`
            {
              allWpPost {
                PostPageNodes: nodes {
                  id
                  language {
                    slug
                  }
                  blogPost {
                    currentPostUrl
                  }
                }
              }
            }
          `);
  
    PostPageNodes.forEach(({ id, language: { slug }, blogPost: { currentPostUrl } }) => {
      createPage({
        path: urlSystem.blog[slug] + currentPostUrl,
        component: resolve('src/templates/blog-post.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // BLOG AUTHORS
  
    const { data: { allWpAuthors: { BlogAuthorsNodes } } } = await graphql(`
            {
              allWpAuthors{
                BlogAuthorsNodes: nodes {
                  id
                  author {
                    userUrl
                  }
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    BlogAuthorsNodes.forEach(({ id, language: { slug }, author: { userUrl } }) => {
      createPage({
        path: urlSystem.author[slug] + userUrl,
        component: resolve('src/templates/blog-author.jsx'),
        context: {
          id,
          slug,
        },
      });
    });
  
    // BLOG CATEGORY
  
    const { data: { allWpCategory: { BlogCategoryNodes } } } = await graphql(`
            {
              allWpCategory{
                BlogCategoryNodes: nodes {
                  id
                  blogCategory {
                    categoryUrl
                  }
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    BlogCategoryNodes.forEach(({ id, language: { slug }, blogCategory: { categoryUrl } }) => {
      createPage({
        path: urlSystem.category[slug] + categoryUrl,
        component: resolve('src/templates/blog-category.jsx'),
        context: {
          id,
          slug,
        },
      });
    });

  
    // PRIVACY POLICE
  
    const { data: { allWpPage: { privacyPoliceNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Privacy Police"}}}) {
                privacyPoliceNodes: nodes {
                  id
                  language {
                    slug
                  }
                }
              }
            }
          `);
  
    privacyPoliceNodes.forEach(({ id, language: { slug } }) => {
      createPage({
        path: urlSystem.privacyPolice[slug],
        component: resolve('src/templates/privacy-police.jsx'),
        context: {
          id,
          slug,
        },
      });
    });

  }