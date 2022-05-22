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

  // CONTACT

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
}