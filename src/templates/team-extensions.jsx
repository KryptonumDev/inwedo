import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero/services-sub"
import TwoColumnFlex from "../components/two-column/two-column-list"
import TechStack from "../components/tech-stack"
import TwoColumnFlexSecond from "../components/two-column/two-column-about"
import BenefitsGrid from "../components/benefits-grid"
import CallToAction from "../components/cta"
import WorkshopBenefits from "../components/workshop-benefits"
import Testomontials from "../components/testomontials-slider"
import RelatedServices from "../components/related-services"
import FAQ from "../components/faq"

const TeamExtensionsPage = ({ data: { allWpPage } }) => {
    let { teamExtensions } = allWpPage.nodes[0]
    return (
        <main>
            <Hero data={teamExtensions.heroTeamExtensions} />
            <TwoColumnFlex data={teamExtensions.twoColumnFlexTeamExtensions}/>
            <TechStack data={teamExtensions.techStackTeamExtensions}/>
            <TwoColumnFlexSecond data={teamExtensions.twoColumnFlexTeamExtensionsSecond}/>
            <BenefitsGrid data={teamExtensions.benefitsGridTeamExtensions}/>
            <CallToAction data={teamExtensions.callToActionTeamExtensions}/>
            <WorkshopBenefits data={teamExtensions.workshopBenefitsTeamExtensions}/>
            <Testomontials data={teamExtensions.testomontialsTeamExtensions}/>
            <CallToAction data={teamExtensions.callToActionTeamExtensionsSecond}/>
            <RelatedServices data={teamExtensions.relatedServicesTeamExtensions}/>
            <FAQ data={teamExtensions.faqTeamExtensions}/>
        </main>
    )
}

export default TeamExtensionsPage


export const query = graphql`
query TeamExtensionsPageQuery($id: String!) {
    allWpPage(filter: {id: {eq: $id}}) {
      nodes {
        teamExtensions {
            heroTeamExtensions {
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
                        gatsbyImageData
                    }
                }
              }
            }
            twoColumnFlexTeamExtensions{
              sectionTitle
              subTitle
              text
              list
            }
            techStackTeamExtensions{
                sectionTitle
                technologies{
                    techologieIcon{
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
            twoColumnFlexTeamExtensionsSecond {
              title
              subTitle
              text
              button {
                name
                url
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
            benefitsGridTeamExtensions {
              benefits {
                benefitTitle
                benefitText
                benefitIcon {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            callToActionTeamExtensions {
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
                publicUrl
                sourceUrl
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
            workshopBenefitsTeamExtensions {
              sectionTitle
              text
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              benefits {
                benefitTitle
                benfitText
                benefitIcon {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            testomontialsTeamExtensions {
              title
              text
              testomontialsItem {
                author {
                  authorName
                  authorPosition
                  userIconPng {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                testomontialText
                companyLogo {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            callToActionTeamExtensionsSecond {
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
                publicUrl
                sourceUrl
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
            relatedServicesTeamExtensions {
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
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            faqTeamExtensions {
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


