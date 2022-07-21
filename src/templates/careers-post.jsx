import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero/careers-post"
import CareersTextParts from "../components/job-text-part"
import Benefits from "../components/job-benefits"
import RecruitmentProcess from '../components/careers-recruitment'
import ApointmentWithHr from "../components/careers-appointment-hr"
import parse from 'html-react-parser'
import { Container } from "../style"
import FixedApply from "../components/fixed-apply"

export default function CareersPost({ data: { allWpJobOffer, alternates }, location }) {
  let { careersPost, language, seo, scryptInjection } = allWpJobOffer.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='careers post' template='Blog Archive' currTemplate={careersPost.templateName} />
      <FixedApply data={careersPost.jobInformation}/>
      <Hero apply={careersPost.jobInformation} data={careersPost.heroJob} location={location} />
      {careersPost.textParts.map(el => (
        <CareersTextParts data={el} />
      ))}
      <Benefits data={careersPost.benefitsJob} />
      <RecruitmentProcess data={careersPost.recruitmentProcessJob} />
      <ApointmentWithHr data={careersPost.appointmentWithHrJob} />
    </main>
  )
}

export const query = graphql`
    query CareersPostQuery($id: String!) {
        alternates : allWpJobOffer{
            nodes{
                id
                language{
                    slug
                    locale
                }
                page : careersPost{
                    url : currentPostUrl
                    template : templateName
                }
            }
        }
        allWpJobOffer(filter: {id: {eq: $id}}){
            nodes{
              scryptInjection {
                code
              }
              language{
                  slug
                  locale
              }
              seo {
                title
                metaDesc
                opengraphSiteName
                opengraphModifiedTime
                opengraphImage {
                  publicUrl
                }
              }
                id
                careersPost{
                    templateName
                    currentPostUrl
                    jobInformation{
                      jobSallary
                      jobTitle
                      linkToApply
                      applyButtonText
                    }
                    heroJob {
                      pageTitle
                      text
                      topImage {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                          }
                        }
                      }
                    }
                    textParts{
                        sectionTitle
                        listUnderTitle
                    }
                    benefitsJob{
                        sectionTitle
                        showMore
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
                    recruitmentProcessJob{
                        sectionTitle
                        seoTitle
                        boldText
                        plainText
                        applyButton{
                            name
                            url
                        }
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
                    appointmentWithHrJob{
                        sectionTitle
                        hrCard{
                            hrAvatar{
                                altText
                                localFile {
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
                }
            }
        }
    }
`