const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

urlSystem = {
  'Homepage': {
    pl: '/pl/',
    en: '/',
    'pl-name': 'Homepage',
    'en-name': 'Strona Główna'
  },
  'Services': {
    pl: '/uslugi/',
    en: '/services/',
    'pl-name': 'Usługi',
    'en-name': 'Services'
  },
  'Product Development': {
    pl: '/uslugi/product-development/',
    en: '/services/product-development/',
    'pl-name': 'Product Development',
    'en-name': 'Product Development'
  },
  'Discovery Workshop': {
    pl: '/uslugi/warsztaty-discovery-workshops/',
    en: '/services/discovery-workshops/',
    'pl-name': 'Warsztat Discovery Workshops',
    'en-name': 'Discovery Workshops'
  },
  'Product Design': {
    pl: '/uslugi/projektowanie-design-produktu-digital-ux-ui/',
    en: '/services/digital-product-design-ux-ui/',
    'pl-name': 'Projektowanie Design Produktu Digital UX UI',
    'en-name': 'Digital Product Design US UI'
  },
  'Web App': {
    pl: '/uslugi/web-development/',
    en: '/services/web-development/',
    'pl-name': 'Web Development',
    'en-name': 'Web Development'
  },
  'Agile Teams': {
    pl: '/uslugi/outsourcing-it-dedykowane-zespoly-agile/',
    en: '/services/dedicated-team-it-outsourcing-agile-teams-on-demand/',
    'pl-name': 'Outsourcing It Dedykowane Zespoly Agile',
    'en-name': 'Dedicated Team It Outsourcing Agile Teams On Demand'
  },
  'Team Extensions': {
    pl: '/uslugi/outsourcing-it-team-extension/',
    en: '/services/it-outsourcing-team-extension/',
    'pl-name': 'Outsourcing It Team Extension',
    'en-name': 'It Outsourcing Team Extension'
  },
  'About': {
    pl: '/o-nas/',
    en: '/about-us/',
    'pl-name': 'O Nas',
    'en-name': 'About Us'
  },
  'How We Work': {
    pl: '/o-nas/jak-dzialamy/',
    en: '/about-us/how-we-work/',
    'pl-name': 'Jak Działamy',
    'en-name': 'How We Work'
  },
  'Contact': {
    pl: '/kontakt/',
    en: '/contact/',
    'pl-name': 'Kontakt',
    'en-name': 'Contact'
  },
  "Privacy Policy": {
    pl: '/polityka-prywatnosci/',
    en: '/privacy-policy/',
    'pl-name': 'Polityka Prywatności',
    'en-name': 'Privacy Policy'
  },
  'Cookie Policy': {
    pl: '/polityka-pliki-cookie/',
    en: '/cookie-policy/',
    'pl-name': 'Polityka Pliki Cookie',
    'en-name': 'Cookie Policy'
  },
  'Terms And Conditions': {
    pl: '/zasady-warunki/',
    en: '/terms-and-conditions/',
    'pl-name': 'Zasady Warunki',
    'en-name': 'Terms And Conditions'
  },
  "Careers Homepage": {
    pl: '/kariera/',
    en: '/careers/',
    'pl-name': 'Kariera',
    'en-name': 'Careers'
  },
  "Portfolio Archive": {
    pl: '/pl/case-studies/',
    en: '/case-studies/',
    'pl-name': 'Case Studies',
    'en-name': 'Case Studies'
  },
  'Blog Archive': {
    pl: '/pl/blog/',
    en: '/blog/',
    'pl-name': 'Blog',
    'en-name': 'Blog'
  },

  'Technology': { pl: '/uslugi/web-development/', en: '/services/web-development/' },
  'Blog Post': { pl: '/pl/blog/post/', en: '/blog/post/' },
  'author': { pl: 'pl/blog/autor/', en: '/blog/author/' },
  'category': { pl: '/pl/blog/kategoria/', en: '/blog/category/' },
  "Careers Path": { pl: '/kariera/sciezka-kariery/', en: '/careers/career-path/' },
}

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {

  // HOMEPAGE

  const { data: { allWpPage: { homepageNodes } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Homepage"}}}) {
                homepageNodes: nodes {
                  id
                  language {
                    slug
                  }
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  homepageNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/homepage.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  servicesNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/services.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  contactNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/contact.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  aboutNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/about.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  howWeWorkNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/how-we-work.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  workshopNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/discovery-workshop.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  webAppNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/web-app.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  agileTeamsNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/agile-teams.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  teamExtensionsNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/team-extensions.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  productDesignNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/product-design.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  productDevelopmentNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/product-development.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                  technology{
                    currentPageUrl
                  }
                }
              }
            }
          `);

  technologiesNodes.forEach(({ id, language: { slug }, technology: { currentPageUrl }, template: { templateName } }) => {
    let url = urlSystem['Technology'][slug] + currentPageUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
      component: resolve('src/templates/technology.jsx'),
      context: {
        id,
        slug,
        templateName
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
                  template {
                    templateName
                  }
                }
              }
            }
          `);



  const { data: { categoryParents: { categoryArchiveNodes } } } = await graphql(`
    {
      categoryParents : allWpCategoryPortfolio(filter: {wpParent: {node: {slug: {eq: null}}}}) {
        categoryArchiveNodes: nodes {
          catSlug: slug
          language {
            slug
          }
        }
      }
    }
    `);

  portfolioArchiveNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/portfolio-archive.jsx'),
      context: {
        id,
        slug,
        templateName
      },
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
    let url = urlSystem["Portfolio Archive"][slug] + currentPostUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
      component: resolve('src/templates/portfolio-post.jsx'),
      context: {
        id,
        slug,
      },
    });
  });

  // BLOG ARCHIVE

  const { data: { allWpPage: { blogArchiveNodes }, allWpPost: { blogArchiveSubPages } } } = await graphql(`
            query {
              allWpPage(filter: {template: {templateName: {eq: "Blog Archive"}}}) {
                blogArchiveNodes : nodes {
                  id
                  language {
                    slug
                  }
                  template {
                    templateName
                  }
                }
              }
              allWpPost {
                blogArchiveSubPages : nodes {
                  id
                }
              }
            }
          `);

  blogArchiveNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {

    let pagesCount = Math.ceil(blogArchiveSubPages.length / 10) - 1

    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/blog-archive.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });

    for (let i = 0; i < pagesCount; i++) {
      let page = i + 2
      createPage({
        path: urlSystem[templateName][slug] + page + '/',
        component: resolve('src/templates/blog-archive.jsx'),
        context: {
          id,
          slug,
          page,
          templateName
        },
      });
    }

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
    if (currentPostUrl !== null) {
      let url = urlSystem['Blog Post'][slug] + currentPostUrl
      url = url?.slice(-1) === '/' ? url : url + '/'
      createPage({
        path: url,
        component: resolve('src/templates/blog-post.jsx'),
        context: {
          id,
          slug,
        },
      });
    }
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
    let url = urlSystem['author'][slug] + userUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
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
    let url = urlSystem['category'][slug] + categoryUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
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
              allWpPage(filter: {template: {templateName: {eq: "Privacy Policy"}}}) {
                privacyPoliceNodes: nodes {
                  id
                  language {
                    slug
                  }
                  template {
                    templateName
                  }
                }
              }
            }
          `);

  privacyPoliceNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/privacy-police.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });

  // Careers

  const { data: { allWpPage: { careersNodes } } } = await graphql(`
    query {
      allWpPage(filter: {template: {templateName: {eq: "Careers Homepage"}}}) {
        careersNodes: nodes {
          id
          language {
            slug
          }
          template {
            templateName
          }
        }
      }
    }
  `);

  careersNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
    createPage({
      path: urlSystem[templateName][slug],
      component: resolve('src/templates/careers.jsx'),
      context: {
        id,
        slug,
        templateName
      },
    });
  });

  // Careers Posts

  const { data: { allWpJobOffer: { careersPostNodes } } } = await graphql(`
    query {
      allWpJobOffer {
        careersPostNodes : nodes {
          id
          language{
            slug
          }
          careersPost {
            currentPostUrl
          }
        }
      }
    }
  `);

  careersPostNodes.forEach(({ id, language: { slug }, careersPost: { currentPostUrl } }) => {
    let url = urlSystem["Careers Homepage"][slug] + currentPostUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
      component: resolve('src/templates/careers-post.jsx'),
      context: {
        id,
        slug
      },
    });
  });

  // Careers Path

  const { data: { allWpCareerPath: { careersPathNodes } } } = await graphql(`
    query {
      allWpCareerPath {
        careersPathNodes : nodes {
          id
          language{
            slug
          }
          path : careerth_path {
            currentPostUrl
          }
        }
      }
    }
  `);

  careersPathNodes.forEach(({ id, language: { slug }, path: { currentPostUrl } }) => {
    let url = urlSystem["Careers Path"][slug] + currentPostUrl
    url = url?.slice(-1) === '/' ? url : url + '/'
    createPage({
      path: url,
      component: resolve('src/templates/careers-path.jsx'),
      context: {
        id,
        slug
      },
    });
  });

}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`

    deletePage(oldPage)
    createPage(page)
  }
}