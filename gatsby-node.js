const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

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
      path: slug === defaultLocale ? '/' : slug,
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
      path: slug === defaultLocale ? '/services/' : '/' + slug + '/services/',
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
      path: slug === defaultLocale ? '/contact/' : '/' + slug + '/contact/',
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
      path: slug === defaultLocale ? '/about-us/' : '/' + slug + '/about-us/',
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
      path: slug === defaultLocale ? '/how-we-work/' : '/' + slug + '/how-we-work/',
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
      path: slug === defaultLocale ? '/discovery-workshop/' : '/' + slug + '/discovery-workshop/',
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
      path: slug === defaultLocale ? '/web-app-development/' : '/' + slug + '/web-app-development/',
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
      path: slug === defaultLocale ? '/agile-teams/' : '/' + slug + '/agile-teams/',
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
      path: slug === defaultLocale ? '/team-extensions/' : '/' + slug + '/team-extensions/',
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
      path: slug === defaultLocale ? '/product-design/' : '/' + slug + '/product-design/',
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
      path: slug === defaultLocale ? '/product-development/' : '/' + slug + '/product-development/',
      component: resolve('src/templates/product-development.jsx'),
      context: {
        id,
        slug,
      },
    });
  });
}