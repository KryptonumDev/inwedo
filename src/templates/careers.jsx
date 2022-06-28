import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero/careers"
import ApointmentWithHr from "../components/careers-appointment-hr"
import HowWeWork from "../components/careers-how-we-work"
import CareersPaths from "../components/careers-paths"
import OurCulture from "../components/careers-culture"
import OurValues from "../components/careers-values"
import CallToAction from "../components/cta"
import ProjectsYouCanWorkOn from "../components/careers-projects"
import Benefits from "../components/careers-benefits"
import MeetUs from "../components/careers-meet-us"
import RecruitmentProcess from "../components/careers-recruitment"
import OnBoarding from "../components/careers-onboarding"
import FAQ from "../components/faq"
import JoinUs from "../components/careers-join-us"

const CareersPage = ({ data: { allWpPage, alternates, allWpJobOffer, allWpCategoryJob, allWpSeniority }, location }) => {
  let { careersHomepage, language } = allWpPage.nodes[0]
  return (
    <main>
      <Seo lang={language.slug} alternates={alternates} location={location} />
      <Hero data={careersHomepage.heroCareers} />
      <JoinUs data={careersHomepage.joinUs} offers={allWpJobOffer.nodes} categories={allWpCategoryJob.nodes} seniority={allWpSeniority.nodes}/>
      <ApointmentWithHr data={careersHomepage.appointmentWithHr} />
      <HowWeWork data={careersHomepage.howWeWork} />
      <CareersPaths data={careersHomepage.careerPaths} />
      <OurCulture data={careersHomepage.ourCulture} />
      <OurValues data={careersHomepage.ourValuesCareers} />
      <CallToAction data={careersHomepage.callToActionCareers} />
      <ProjectsYouCanWorkOn data={careersHomepage.projectsYouCanWorkOnCareers} />
      <Benefits data={careersHomepage.benefits} />
      <MeetUs data={careersHomepage.meetUs}/>
      <RecruitmentProcess data={careersHomepage.recruitmentProcess}/>
      <ApointmentWithHr data={careersHomepage.appointmentWithHr} />
      <OnBoarding data={careersHomepage.onboarding}/>
      <CallToAction data={careersHomepage.callToActionCareersSecond} />
      {careersHomepage.faqCareers.map(el => (
        <FAQ data={el} />
      ))}
    </main>
  )
}

export default CareersPage

export const query = graphql`
query CareersPageQuery($id: String!, $templateName: String!) {
    allWpCategoryJob {
      nodes {
        slug
        name
      }
    }
    allWpSeniority {
      nodes {
        name
        slug
      }
    }
    allWpJobOffer {
      nodes {
        language{
          slug
        }
        careersPost {
          currentPostUrl
          jobInformation {
            jobSallary
            jobTitle
            linkToApply
          }
        }
        seniority {
          nodes {
            name
            slug
          }
        }
        categoriesJob {
          nodes {
            name
            slug
          }
        }
      }
    }
    alternates : allWpPage(filter: {template: {templateName: {eq: $templateName}}}) {
        nodes {
            language {
                slug
                name
            }
            template {
                templateName
            }
        }
    }
    allWpPage(filter: {id: {eq: $id}}) {
          nodes {
            language {
              slug
              name
            }
            careersHomepage{
                heroCareers {
                  pageTitle
                  textUnderTitle
                  button {
                    url
                    name
                  }
                  backgroundImage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                joinUs{
                    sectionTitle
                    categoryTitle
                    seniorityTitle
                    showOfferText
                    applyOfferText
                }
                appointmentWithHr{
                    sectionTitle
                    hrCard{
                        hrAvatar{
                            altText
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                        }
                        hrName
                        hrPosition
                        hrPhone
                        hrEmail
                        linkedinButton{
                            name
                            url
                        }
                        bookButton{
                            name
                            url
                        }
                    }
                }
                howWeWork{
                  sectionTitle
                  titleFirst
                  boldTextFirst
                  plainTextFirst
                  linkFirst{
                    name
                    url
                  }
                  imageCarousel{
                    image{
                      altText
                      localFile{
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                  titleSecond
                  boldTextSecond
                  plainTextSecond
                  linkSecond{
                    name
                    url
                  }
                  image{
                    altText
                    localFile{
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                careerPaths{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                  paths{
                    title
                    link{
                      name
                      url
                    }
                    icon{
                      altText
                      localFile{
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                ourCulture{
                  sectionTitle
                  text
                  imgGrid : imgGridCopy{
                    rightTopImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    rightBottomImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    leftTopImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    leftBottomImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                ourValuesCareers{
                  sectionTitle
                  ourValues{
                    title
                    text
                    icon{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                callToActionCareersSecond {
                  typeOfCta
                  title
                  text
                  buttonText
                  form {
                    submitButtonText
                    inputPlaceholder
                  }
                  button {
                    url
                    name
                  }
                  downloadFile {
                    localFile{
                      publicURL
                    }
                  }
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                callToActionCareers {
                  typeOfCta
                  title
                  text
                  buttonText
                  form {
                    submitButtonText
                    inputPlaceholder
                  }
                  button {
                    url
                    name
                  }
                  downloadFile {
                    localFile{
                      publicURL
                    }
                  }
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                projectsYouCanWorkOnCareers{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                  projects{
                    logo{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                benefits{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                  showMore
                  image{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  benefits{
                    title
                    text
                    icon{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                meetUs{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                  link{
                    name
                    url
                  }
                  icons{
                    icon{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                  image{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  testomontialsFirstRow{
                    testomontialText
                  }
                  testomontialsSecondRow{
                    testomontialText
                  }
                }
                recruitmentProcess{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                  video {
                    altText
                    localFile {
                      publicURL
                    }
                  }
                  pathImage{
                    tablet{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    phone{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                    desctop{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                onboarding{
                  sectionTitle
                  image{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    } 
                  }
                  seoTitle
                  boldText
                  plainText
                  testomontialsRepeater{
                    name
                    position
                    testomontial
                    avatar{
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      } 
                    }
                  }
                }
                faqCareers {
                  title
                  faqElement {
                    answer
                    question
                  }
                }
            }
          }
        }
      }
`


