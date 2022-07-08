import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero/careers-post"
import CareersTextParts from "../components/job-text-part"
import Benefits from "../components/job-benefits"
import RecruitmentProcess from '../components/careers-recruitment'
import ApointmentWithHr from "../components/careers-appointment-hr"

export default function CareersPost({ data: { allWpJobOffer, alternates }, location }) {
  let { careersPost, language, seo } = allWpJobOffer.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='careers post' template='Blog Archive' currTemplate={careersPost.templateName} />
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
              seo {
                title
                fullHead
              }
                id
                careersPost{
                    templateName
                    currentPostUrl
                    heroJob {
                      pageTitle
                      text
                      topImage {
                        altText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                        applyButton{
                            name
                            url
                        }
                        pathImage{
                          tablet{
                            altText
                            localFile {
                              childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
                              }
                            }
                          }
                          phone{
                            altText
                            localFile {
                              childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
                              }
                            }
                          }
                          desctop{
                            altText
                            localFile {
                              childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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