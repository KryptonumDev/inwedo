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
import parse from 'html-react-parser'
import Analytics from './../analytics/careers'

const CareersPage = ({ data: { allWpPage, alternates, allWpJobOffer, allWpCategoryJob, allWpSeniority, allWpCareerPath }, location }) => {
  let { careersHome, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Careers Homepage' />
      <Hero data={careersHome.heroCareers} />
      <JoinUs location={location.pathname} analytics={Analytics} data={careersHome.joinUs} offers={allWpJobOffer.nodes} categories={allWpCategoryJob.nodes} seniority={allWpSeniority.nodes} />
      <ApointmentWithHr location={location.pathname} analytics={Analytics} data={careersHome.appointmentWithHr} />
      <HowWeWork data={careersHome.howWeWork} />
      <CareersPaths analytics={Analytics} data={careersHome.careerPaths} items={allWpCareerPath.nodes}/>
      <OurCulture data={careersHome.ourCulture} />
      <OurValues data={careersHome.ourValuesCareers} />
      <CallToAction data={careersHome.callToActionCareers} />
      <ProjectsYouCanWorkOn data={careersHome.projectsYouCanWorkOnCareers} />
      <Benefits data={careersHome.benefits} />
      <MeetUs data={careersHome.meetUs} />
      <RecruitmentProcess data={careersHome.recruitmentProcess} />
      <ApointmentWithHr location={location.pathname} analytics={Analytics} data={careersHome.appointmentWithHr} />
      <OnBoarding data={careersHome.onboarding} />
      <CallToAction data={careersHome.callToActionCareersSecond} />
      {careersHome.faqCareers.map(el => (
        <FAQ data={el} />
      ))}
    </main>
  )
}

export default CareersPage

export const query = graphql`
query CareersPageQuery($id: String!, $templateName: String!) {
  allWpCareerPath {
    nodes{
      language{
        slug
      }
      path : careerth_path{
        currentPostUrl
        previewInformation{
          icon{
            altText
            localFile{
              publicURL
            }
          }
          title
          linkText
        }
      }
    }
  }
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
        date(formatString: "DDMMYYYY")
        guid
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
            scryptInjection {
              code
            }
            language {
              slug
              name
            }
            seo {
              title
              metaDesc
              opengraphSiteName
              opengraphImage {
                publicUrl
              }
            }
            careersHome{
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
                        gatsbyImageData(placeholder: BLURRED, quality: 99)
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
                    noPostsText
                }
                appointmentWithHr{
                    sectionTitle
                    hrCard{
                        hrAvatar{
                            altText
                            localFile {
                              publicURL
                              childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                  imageFirst{
                      altText
                      localFile{
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
                      }
                    }
                  }
                }
                careerPaths{
                  sectionTitle
                  seoTitle
                  boldText
                  plainText
                }
                ourCulture{
                  sectionTitle
                  text
                  imgGrid : imgGridCopy{
                    rightTopImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                      }
                    }
                    rightBottomImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                      }
                    }
                    leftTopImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                      }
                    }
                    leftBottomImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
                      }
                    }
                  }
                  benefits{
                    title
                    text
                    icon{
                      altText
                      localFile {
                        publicURL
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
                          gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                      }
                    }
                  }
                  image{
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                  pathImage{
                    tablet{
                      altText
                      localFile {
                        publicURL
                      }
                    }
                    phone{
                      altText
                      localFile {
                        publicURL
                      }
                    }
                    desctop{
                      altText
                      localFile {
                        publicURL
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
                        gatsbyImageData(placeholder: BLURRED, quality: 95)
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
                        publicURL
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


