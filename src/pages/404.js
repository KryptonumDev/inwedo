import * as React from "react"
import { Link, navigate } from "gatsby"
import Lottie from 'react-lottie'
import animationData from '../images/lottie.json'
import styled from "styled-components"
import { Container } from "../style"
import { graphql } from "gatsby"
import { urlSystem } from "../contstants/urlSystem"
import Seo from "../components/seo"

const NotFoundPage = ({ data: { allWpPage } }) => {
  const { language, errorPage: { textUnderTitle, pageTitle, goBackProposal, homeButtonText }, seo } = allWpPage.nodes[0]
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  let canBack = false
  if (typeof window !== "undefined") {
    canBack = window.history.length
  }

  return (
    <Wrapper>
      <Seo data={seo} />
      <Container>
        <Content>
          <div className="lotie">
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
          <div>
            <h1 className="colored h1">404</h1>
            <h2 className="h3">{pageTitle}</h2>
            <p className="p">{textUnderTitle}</p>
            {canBack
              ? <button onClick={() => navigate(-1)} className="p colored">{goBackProposal}</button>
              : null}
            <Link className="button" to={urlSystem['Homepage'][language.slug]}>{homeButtonText}</Link>
          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default NotFoundPage

export const query = graphql`
    query ErrorENQuery {
        allWpPage(filter: {id: {eq: "cG9zdDo1MTE4"}}){
            nodes{
              language{
                slug
              }
              seo {
                title
                fullHead
              }
              errorPage {
                textUnderTitle
                pageTitle
                homeButtonText
                goBackProposal
              }
            }
        }
    }
`

const Wrapper = styled.main`
  position: relative;
  margin-top: 81px;
`

const Content = styled.div`
  display: flex;
  gap: 64px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 120px;

  .lotie{
    div{
      width: clamp(300px, ${300/768*100}vw, 400px) !important;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 32px;

    svg{
      height: 50%;
    }

    .lotie{
      div{
        height: 200px !important;
        width: 400px !important;
      }
    }
  }
  

  & > div{
    max-width: 430px;

    .h1{
      font-weight: 600;
      margin-bottom: 16px;
    }

    .h3{
      margin-bottom: 16px;
    }

    .p{
      margin-bottom: 16px;
      border: none;
      background-color: transparent;
      text-align: left;
    }

  }
`