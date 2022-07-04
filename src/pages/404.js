import * as React from "react"
import { Link } from "gatsby"
import Lottie from 'react-lottie';
import animationData from '../images/lottie.json';
import styled from "styled-components";
import { Container } from "../style";
import { graphql } from "gatsby"

const NotFoundPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  //  onClick={() => navigate(-1)}

  return (
    <Wrapper>
      <Container>
        <Content>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
          <div>

          </div>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default NotFoundPage

export const query = graphql`
    query ErrorENQuery {
        allWpPage(filter: {id: {eq: "cG9zdDo1MTI3"}}){
            nodes{
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
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 64px;
  
`