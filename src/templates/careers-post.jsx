import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero/careers-post"
import CareersTextParts from "../components/job-text-part"
import Benefits from "../components/job-benefits"
import RecruitmentProcess from '../components/careers-recruitment'
import ApointmentWithHr from "../components/careers-appointment-hr"

export default function CareersPost({ data: { allWpJobOffer, alternates }, location }) {
  let { careersPost, language } = allWpJobOffer.nodes[0]
  return (
    <main>
      <Seo lang={language.slug} alternates={alternates} location={location} type='technology' template='Blog Archive' currTemplate={careersPost.templateName} />
      <Hero data={careersPost.heroJob} location={location} />
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
              language{
                  slug
                  locale
              }
                id
                careersPost{
                    currentPostUrl
                    heroJob {
                      pageTitle
                      text
                      topImage {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData
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
                                  childImageSharp {
                                    gatsbyImageData
                                  }
                                }
                            }
                        }
                    }
                    recruitmentProcessJob{
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
                        applyButton{
                            name
                            url
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
                    appointmentWithHrJob{
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
                }
            }
        }
    }
`