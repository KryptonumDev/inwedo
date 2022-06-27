const fs = require('fs');
const { resolve } = require('path');
const { get } = require('https');

import { urlSystem } from './src/contstants/urlSystem'

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
    createPage({
      path: urlSystem['Technology'][slug] + currentPageUrl,
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


    categoryArchiveNodes.forEach(({ language: { catLangSlug }, catSlug }) => {
      createPage({
        path: urlSystem[templateName][slug] + catSlug,
        component: resolve('src/templates/portfolio-archive.jsx'),
        context: {
          id,
          slug,
          templateName
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
      path: urlSystem["Portfolio Archive"][slug] + currentPostUrl,
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
      createPage({
        path: urlSystem['Blog Archive'][slug] + currentPostUrl,
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
    createPage({
      path: urlSystem['author'][slug] + userUrl,
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
    if (slug != 'pl') {  // TODO: usunąć pl disable
      createPage({
        path: urlSystem['category'][slug] + categoryUrl,
        component: resolve('src/templates/blog-category.jsx'),
        context: {
          id,
          slug,
        },
      });
    }
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

  // COOKIE POLICE

  const { data: { allWpPage: { cookiePoliceNodes } } } = await graphql(`
    query {
      allWpPage(filter: {template: {templateName: {eq: "Cookie Policy"}}}) {
        cookiePoliceNodes: nodes {
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

  cookiePoliceNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
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

  // TERMS AND CONDITIONS

  const { data: { allWpPage: { termsAndConditionsNodes } } } = await graphql(`
    query {
      allWpPage(filter: {template: {templateName: {eq: "Terms And Conditions"}}}) {
        termsAndConditionsNodes: nodes {
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

  termsAndConditionsNodes.forEach(({ id, language: { slug }, template: { templateName } }) => {
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
    createPage({
      path: urlSystem["Careers Homepage"][slug] + currentPostUrl,
      component: resolve('src/templates/careers-post.jsx'),
      context: {
        id,
        slug
      },
    });
  });

  // Careers Path

  // const { data: { allWpCareerPath: { careersPathNodes } } } = await graphql(`
  //   query {
  //     allWpCareerPath {
  //       careersPathNodes : nodes {
  //         id
  //         language{
  //           slug
  //         }
  //         path : careerth_path {
  //           currentPostUrl
  //         }
  //       }
  //     }
  //   }
  // `);

  // careersPathNodes.forEach(({ id, language: { slug }, path: { currentPostUrl } }) => {
  //   createPage({
  //     path: urlSystem["Careers Path"][slug] + currentPostUrl,
  //     component: resolve('src/templates/careers-path.jsx'),
  //     context: {
  //       id,
  //       slug
  //     },
  //   });
  // });
}