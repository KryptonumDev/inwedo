const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

const urlSystem = {
  homepage: { pl: '/pl/', en: '/' },
  services: { pl: '/uslugi/', en: '/services/' },
  productDevelopment: { pl: '/uslugi/product-development/', en: '/services/product-development/' },
  discoveryWorkshop: { pl: '/uslugi/warsztaty-discovery-workshops/', en: '/services/discovery-workshops/' },
  productDesign: { pl: '/uslugi/projektowanie-design-produktu-digital-ux-ui/', en: '/services/digital-product-design-ux-ui/' },
  webAppDevelopment: { pl: '/uslugi/web-development/', en: '/services/web-development/' },
  agileTeamsOnDemand: { pl: '/uslugi/outsourcing-it-dedykowane-zespoly-agile/', en: '/services/dedicated-team-it-outsourcing-agile-teams-on-demand/' },
  teamExtensions: { pl: '/uslugi/outsourcing-it-team-extension/', en: '/services/it-outsourcing-team-extension/' },
  aboutUs: { pl: '/o-nas/', en: '/about-us/' },
  HowWeWork: { pl: '/jak-dzialamy/', en: '/how-we-work/' },
  contact: { pl: '/kontakt/', en: '/contact/' },

  netDevelopment: { pl: '/uslugi/web-development/dotnet/', en: '/services/web-development/dotnet/' },
  angularDevelopment: { pl: '/uslugi/web-development/angular/', en: '/services/web-development/angular/' },
  nodeDevelopment: { pl: '/uslugi/web-development/node-js/', en: '/services/web-development/node-js/' },
  reactDevelopment: { pl: '/uslugi/web-development/react-js/', en: '/services/web-development/react-js/' },
  typescriptDevelopment: { pl: '/uslugi/web-development/typescript/', en: '/services/web-development/typescript/' },
  vueDevelopment: { pl: '/uslugi/web-development/vue-js/', en: '/services/web-development/vue-js/' },

  caseStudies: { pl: '/pl/case-studies/', en: '/case-studies/' },
  blog: { pl: '/pl/blog/', en: '/blog/' },
}

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
      path: currentPageUrl,
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
      path: currentPostUrl,
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
      path: currentPostUrl,
      component: resolve('src/templates/blog-post.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

}