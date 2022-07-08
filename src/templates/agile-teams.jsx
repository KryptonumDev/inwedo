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

const AgileTeamsPage = ({ data: { allWpPage, alternates }, location }) => {
  let { agileTeams, language, seo } = allWpPage.nodes[0]
  return (
    <main id='main'>
      <Seo data={seo} lang={language.slug} alternates={alternates} location={location} type='Services' />
      <Hero data={agileTeams.heroAgileTeams} />
      <OurFocuses data={agileTeams.ourFocusesAgileTeams} />
      <MiniFaq data={agileTeams.miniFaqAgileTeams} />
      <TeamSizes data={agileTeams.teamSizes} />
      <TechStack data={agileTeams.techStack} />
      <ImageDivider data={agileTeams.imageDivider} />
      <SuccessStories data={agileTeams.successStoriesAgileTeams} />
      <TwoColumnFlex data={agileTeams.twoColumnFlexAgileTeams} />
      <TestomontialDivider data={agileTeams.testomontialDividerAgileTeams} />
      <CallToAction data={agileTeams.callToActionAgileTeams} />
      <RelatedServices data={agileTeams.relatedServicesAgileTeams} />
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
        language {
          slug
          name
        }
        seo {
          title
          fullHead
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
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
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
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                              childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
                              }
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
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, quality: 80)
                            }
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
                            gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                  }
                }
                caseLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    gatsbyImageData(placeholder: BLURRED, quality: 80)
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
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
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


