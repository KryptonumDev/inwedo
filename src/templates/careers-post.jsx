import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero/careers-post"
import CareersTextParts from "../components/job-text-part"
import Benefits from "../components/job-benefits"
import RecruitmentProcess from '../components/careers-recruitment'
import ApointmentWithHr from "../components/careers-appointment-hr"
import parse from 'html-react-parser'
import FixedApply from "../components/fixed-apply"
import Analytics from './../analytics/careers-post'
import { datalayerPush } from "../helpers/datalayer"

export default function CareersPost({ data: { allWpJobOffer, alternates }, location }) {
  let { careersPost, language, seo, scryptInjection } = allWpJobOffer.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')

  useEffect(() => {
    datalayerPush(Analytics.productView(allWpJobOffer.nodes[0]))
  }, [])

  return (
    <main id='main'>
      {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='careers post' template='Blog Archive' currTemplate={careersPost.templateName} />
      <FixedApply location={location.pathname} analytics={Analytics} data={careersPost.jobInformation} />
      <Hero apply={careersPost.jobInformation} data={careersPost.heroJob} location={location} />
      {careersPost.textParts.map(el => (
        <CareersTextParts data={el} />
      ))}
      <Benefits data={careersPost.benefitsJob} />
      <RecruitmentProcess location={location.pathname} analytics={Analytics} data={careersPost.recruitmentProcessJob} />
      <ApointmentWithHr location={location.pathname} analytics={Analytics} data={careersPost.appointmentWithHrJob} />
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
                guid
                date(formatString: "DDMMYYYY")
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
                }
            }
        }
    }
`