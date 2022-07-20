import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import OurFocuses from "../components/our-focuses"
import MiniFaq from "../components/mini-faq"
import TeamSizes from "../components/team-sizes"
import TechStack from "../components/tech-stack"
import ImageDivider from "../components/image-divider"
import SuccessStories from "../components/success-stories"
import TwoColumnFlex from "../components/two-column/two-column-about"
import TestomontialDivider from "../components/testomontial-divider-logo"
import CallToAction from "../components/cta"
import RelatedServices from "../components/related-services"
import FAQ from "../components/faq"
import Seo from "../components/seo"
import parse from 'html-react-parser'
import Analytics from './../analytics/agile-teams'

const AgileTeamsPage = ({ data: { allWpPage, alternates }, location }) => {
  let { agileTeams, language, seo, scryptInjection } = allWpPage.nodes[0]
  let script = parse(scryptInjection.code ? scryptInjection.code : '')
  return (
    <main id='main'>
    {script}
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={agileTeams.heroAgileTeams} analytics={Analytics.hero} location={location.pathname} />
      <OurFocuses data={agileTeams.ourFocusesAgileTeams} />
      <MiniFaq data={agileTeams.miniFaqAgileTeams} />
      <TeamSizes data={agileTeams.teamSizes} />
      <TechStack data={agileTeams.techStack} />
      <ImageDivider data={agileTeams.imageDivider} />
      <SuccessStories data={agileTeams.successStoriesAgileTeams} analytics={Analytics.successStories} location={location.pathname}/>
      <TwoColumnFlex data={agileTeams.twoColumnFlexAgileTeams} analytics={Analytics.twoColumn} location={location.pathname}/>
      <TestomontialDivider data={agileTeams.testomontialDividerAgileTeams} />
      <CallToAction data={agileTeams.callToActionAgileTeams} analytics={Analytics.cta.first} location={location.pathname}/>
      <RelatedServices data={agileTeams.relatedServicesAgileTeams} analytics={Analytics.relatedServices}/>
      <FAQ data={agileTeams.faqAgileTeams} />
    </main>
  )
}

export default AgileTeamsPage


export const query = graphql`
query AgileTeamsPageQuery($id: String!, $templateName: String!) {
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
        agileTeams {
            heroAgileTeams {
                pageTitle
                text
                button {
                    name
                    url
                }
                icon {
                altText
                localFile {
                  publicURL
                }
              }
            }
            ourFocusesAgileTeams {
              sectionTitle
              subTitle
              text
              focuses {
                focusTitle
                focusText
                focusIconPng {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
            }
            miniFaqAgileTeams {
              sectionTitle
              smallText
              text
              questionsAndAnswers {
                question
                answer
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
            teamSizes{
                sectionTitle
                subTitle
                text
                teamSizes{
                    teamSizeName
                    teamIcons{
                            altText
                            localFile {
                              publicURL
                            }
                        }
                }
            }
            techStack{
                sectionTitle
                technologies{
                    technologieUrl
                    techologieIcon{
                        altText
                        localFile {
                          publicURL
                        }
                    }
                }
            }
            imageDivider{
                sectionTitle
                imageDivider{
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 95)
                        }
                    }
                }
            }
            successStoriesAgileTeams {
              sectionTitle
              success {
                caseTitle
                caseText
                button {
                  url
                  name
                }
                previewImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
                caseLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 95)
                    }
                  }
                }
              }
            }
            twoColumnFlexAgileTeams {
              title
              subTitle
              text
              button{
                url
                name
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
            testomontialDividerAgileTeams {
              testomontialText
              personName
              personPosition
              companyLogo {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 95)
                  }
                }
              }
            }
            callToActionAgileTeams {
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
            relatedServicesAgileTeams {
              sectionTitle
              services {
                servisTitle
                servisText
                button {
                  name
                  url
                }
                servisIcon {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
            }
            faqAgileTeams {
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


