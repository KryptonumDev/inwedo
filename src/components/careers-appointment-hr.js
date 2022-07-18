import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function ApointmentWithHr({ data: { sectionTitle, hrCard } }) {
    return (
        <Wrapper>
            <Container>
                <Title>{sectionTitle}</Title>
                <Content className={hrCard.length === 1 ? 'solo' : ''}>
                    {hrCard.map(el => (
                        <Item>
                            <div className="flex">
                                <GatsbyImage className="image" image={el.hrAvatar.localFile.childImageSharp.gatsbyImageData} alt={el.hrAvatar.altText} />
                                <div>
                                    <p className="name">{el.hrName}</p>
                                    <p className="position">{el.hrPosition}</p>
                                    <a className="link first" href={'tel:' + el.hrPhone}>{el.hrPhone}</a>
                                    <a className="link" href={'mailto:' + el.hrEmail}>{el.hrEmail}</a>
                                </div>
                            </div>
                            <div className="buttons">
                                <a className="link" href={el.linkedinButton.url}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4725 1.9999H3.5325C3.34208 1.99725 3.153 2.03214 2.97607 2.10258C2.79913 2.17302 2.6378 2.27762 2.5013 2.41041C2.36479 2.5432 2.25578 2.70158 2.18049 2.87651C2.1052 3.05143 2.06511 3.23947 2.0625 3.4299V20.5699C2.06511 20.7603 2.1052 20.9484 2.18049 21.1233C2.25578 21.2982 2.36479 21.4566 2.5013 21.5894C2.6378 21.7222 2.79913 21.8268 2.97607 21.8972C3.153 21.9676 3.34208 22.0025 3.5325 21.9999H20.4725C20.6629 22.0025 20.852 21.9676 21.0289 21.8972C21.2059 21.8268 21.3672 21.7222 21.5037 21.5894C21.6402 21.4566 21.7492 21.2982 21.8245 21.1233C21.8998 20.9484 21.9399 20.7603 21.9425 20.5699V3.4299C21.9399 3.23947 21.8998 3.05143 21.8245 2.87651C21.7492 2.70158 21.6402 2.5432 21.5037 2.41041C21.3672 2.27762 21.2059 2.17302 21.0289 2.10258C20.852 2.03214 20.6629 1.99725 20.4725 1.9999ZM8.0925 18.7399H5.0925V9.7399H8.0925V18.7399ZM6.5925 8.4799C6.17876 8.4799 5.78197 8.31554 5.48941 8.02298C5.19686 7.73043 5.0325 7.33363 5.0325 6.9199C5.0325 6.50616 5.19686 6.10937 5.48941 5.81681C5.78197 5.52425 6.17876 5.3599 6.5925 5.3599C6.8122 5.33498 7.03468 5.35675 7.24538 5.42378C7.45607 5.49081 7.65024 5.60159 7.81516 5.74886C7.98007 5.89613 8.11203 6.07657 8.20237 6.27838C8.29272 6.48018 8.33942 6.69879 8.33942 6.9199C8.33942 7.141 8.29272 7.35961 8.20237 7.56141C8.11203 7.76322 7.98007 7.94366 7.81516 8.09093C7.65024 8.23821 7.45607 8.34898 7.24538 8.41601C7.03468 8.48304 6.8122 8.50481 6.5925 8.4799ZM18.9125 18.7399H15.9125V13.9099C15.9125 12.6999 15.4825 11.9099 14.3925 11.9099C14.0552 11.9124 13.7267 12.0182 13.4513 12.2131C13.176 12.408 12.967 12.6826 12.8525 12.9999C12.7742 13.2349 12.7403 13.4825 12.7525 13.7299V18.7299H9.7525C9.7525 18.7299 9.7525 10.5499 9.7525 9.7299H12.7525V10.9999C13.025 10.527 13.4214 10.1374 13.8989 9.8731C14.3765 9.60878 14.9171 9.47975 15.4625 9.4999C17.4625 9.4999 18.9125 10.7899 18.9125 13.5599V18.7399Z" fill="url(#paint0_linear_1486_17369)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1486_17369" x1="3.4103" y1="8.10154" x2="21.102" y2="6.42674" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0B5CD6" />
                                                <stop offset="1" stop-color="#21AEFC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {el.linkedinButton.name}
                                </a>
                                <a className="button" href={el.bookButton.url}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.9974 15.8333C10.1622 15.8333 10.3233 15.7844 10.4604 15.6928C10.5974 15.6012 10.7042 15.4711 10.7673 15.3188C10.8304 15.1665 10.8469 14.999 10.8147 14.8373C10.7826 14.6757 10.7032 14.5272 10.5867 14.4107C10.4701 14.2941 10.3216 14.2148 10.16 14.1826C9.99832 14.1504 9.83076 14.1669 9.67849 14.23C9.52622 14.2931 9.39607 14.3999 9.3045 14.5369C9.21294 14.674 9.16406 14.8351 9.16406 14.9999C9.16406 15.2209 9.25186 15.4329 9.40814 15.5892C9.56442 15.7455 9.77638 15.8333 9.9974 15.8333ZM14.1641 15.8333C14.3289 15.8333 14.49 15.7844 14.627 15.6928C14.7641 15.6012 14.8709 15.4711 14.934 15.3188C14.997 15.1665 15.0135 14.999 14.9814 14.8373C14.9492 14.6757 14.8699 14.5272 14.7533 14.4107C14.6368 14.2941 14.4883 14.2148 14.3266 14.1826C14.165 14.1504 13.9974 14.1669 13.8452 14.23C13.6929 14.2931 13.5627 14.3999 13.4712 14.5369C13.3796 14.674 13.3307 14.8351 13.3307 14.9999C13.3307 15.2209 13.4185 15.4329 13.5748 15.5892C13.7311 15.7455 13.943 15.8333 14.1641 15.8333ZM14.1641 12.4999C14.3289 12.4999 14.49 12.451 14.627 12.3595C14.7641 12.2679 14.8709 12.1378 14.934 11.9855C14.997 11.8332 15.0135 11.6657 14.9814 11.504C14.9492 11.3424 14.8699 11.1939 14.7533 11.0773C14.6368 10.9608 14.4883 10.8814 14.3266 10.8493C14.165 10.8171 13.9974 10.8336 13.8452 10.8967C13.6929 10.9598 13.5627 11.0666 13.4712 11.2036C13.3796 11.3407 13.3307 11.5018 13.3307 11.6666C13.3307 11.8876 13.4185 12.0996 13.5748 12.2558C13.7311 12.4121 13.943 12.4999 14.1641 12.4999ZM9.9974 12.4999C10.1622 12.4999 10.3233 12.451 10.4604 12.3595C10.5974 12.2679 10.7042 12.1378 10.7673 11.9855C10.8304 11.8332 10.8469 11.6657 10.8147 11.504C10.7826 11.3424 10.7032 11.1939 10.5867 11.0773C10.4701 10.9608 10.3216 10.8814 10.16 10.8493C9.99832 10.8171 9.83076 10.8336 9.67849 10.8967C9.52622 10.9598 9.39607 11.0666 9.3045 11.2036C9.21294 11.3407 9.16406 11.5018 9.16406 11.6666C9.16406 11.8876 9.25186 12.0996 9.40814 12.2558C9.56442 12.4121 9.77638 12.4999 9.9974 12.4999ZM15.8307 2.49992H14.9974V1.66659C14.9974 1.44557 14.9096 1.23361 14.7533 1.07733C14.597 0.921049 14.3851 0.833252 14.1641 0.833252C13.943 0.833252 13.7311 0.921049 13.5748 1.07733C13.4185 1.23361 13.3307 1.44557 13.3307 1.66659V2.49992H6.66406V1.66659C6.66406 1.44557 6.57626 1.23361 6.41998 1.07733C6.2637 0.921049 6.05174 0.833252 5.83073 0.833252C5.60972 0.833252 5.39775 0.921049 5.24147 1.07733C5.08519 1.23361 4.9974 1.44557 4.9974 1.66659V2.49992H4.16406C3.50102 2.49992 2.86514 2.76331 2.3963 3.23215C1.92745 3.70099 1.66406 4.33688 1.66406 4.99992V16.6666C1.66406 17.3296 1.92745 17.9655 2.3963 18.4344C2.86514 18.9032 3.50102 19.1666 4.16406 19.1666H15.8307C16.4938 19.1666 17.1297 18.9032 17.5985 18.4344C18.0673 17.9655 18.3307 17.3296 18.3307 16.6666V4.99992C18.3307 4.33688 18.0673 3.70099 17.5985 3.23215C17.1297 2.76331 16.4938 2.49992 15.8307 2.49992ZM16.6641 16.6666C16.6641 16.8876 16.5763 17.0996 16.42 17.2558C16.2637 17.4121 16.0517 17.4999 15.8307 17.4999H4.16406C3.94305 17.4999 3.73109 17.4121 3.57481 17.2558C3.41853 17.0996 3.33073 16.8876 3.33073 16.6666V9.16659H16.6641V16.6666ZM16.6641 7.49992H3.33073V4.99992C3.33073 4.77891 3.41853 4.56694 3.57481 4.41066C3.73109 4.25438 3.94305 4.16659 4.16406 4.16659H4.9974V4.99992C4.9974 5.22093 5.08519 5.43289 5.24147 5.58917C5.39775 5.74545 5.60972 5.83325 5.83073 5.83325C6.05174 5.83325 6.2637 5.74545 6.41998 5.58917C6.57626 5.43289 6.66406 5.22093 6.66406 4.99992V4.16659H13.3307V4.99992C13.3307 5.22093 13.4185 5.43289 13.5748 5.58917C13.7311 5.74545 13.943 5.83325 14.1641 5.83325C14.3851 5.83325 14.597 5.74545 14.7533 5.58917C14.9096 5.43289 14.9974 5.22093 14.9974 4.99992V4.16659H15.8307C16.0517 4.16659 16.2637 4.25438 16.42 4.41066C16.5763 4.56694 16.6641 4.77891 16.6641 4.99992V7.49992ZM5.83073 12.4999C5.99555 12.4999 6.15666 12.451 6.2937 12.3595C6.43075 12.2679 6.53756 12.1378 6.60063 11.9855C6.6637 11.8332 6.6802 11.6657 6.64805 11.504C6.6159 11.3424 6.53653 11.1939 6.41998 11.0773C6.30344 10.9608 6.15495 10.8814 5.9933 10.8493C5.83165 10.8171 5.6641 10.8336 5.51183 10.8967C5.35955 10.9598 5.22941 11.0666 5.13784 11.2036C5.04627 11.3407 4.9974 11.5018 4.9974 11.6666C4.9974 11.8876 5.08519 12.0996 5.24147 12.2558C5.39775 12.4121 5.60972 12.4999 5.83073 12.4999ZM5.83073 15.8333C5.99555 15.8333 6.15666 15.7844 6.2937 15.6928C6.43075 15.6012 6.53756 15.4711 6.60063 15.3188C6.6637 15.1665 6.6802 14.999 6.64805 14.8373C6.6159 14.6757 6.53653 14.5272 6.41998 14.4107C6.30344 14.2941 6.15495 14.2148 5.9933 14.1826C5.83165 14.1504 5.6641 14.1669 5.51183 14.23C5.35955 14.2931 5.22941 14.3999 5.13784 14.5369C5.04627 14.674 4.9974 14.8351 4.9974 14.9999C4.9974 15.2209 5.08519 15.4329 5.24147 15.5892C5.39775 15.7455 5.60972 15.8333 5.83073 15.8333Z" fill="white" />
                                    </svg>
                                    {el.bookButton.name}
                                </a>
                            </div>
                        </Item>
                    ))}
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const Title = styled.h2`
    text-align: center;
    position: relative;
    padding: 16px 0 0 0;    
    max-width: 540px; 
    margin: 0 auto clamp(32px, 6.25vw, 64px) auto;
    font-size: clamp(16px, 3.125vw, 24px);
    font-weight: 400;
    line-height: 151%;


    &::before{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40px;
        height: 1px;
        background-color: var(--color-black);
    }

`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin: 0 auto;
    max-width: 1060px;

    @media (max-width: 1023px) {
        grid-template-columns: 1fr;
    }

    &.solo{
        display: flex;
        justify-content: center;

        @media (max-width: 480px){
            display: grid;
        }
    }
`

const Item = styled.div`
    max-width: 534px;
    width: 100%;
    padding: clamp(24px, ${30 / 768 * 100}vw, 36px) clamp(36px, ${42 / 768 * 100}vw, 48px);
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: var(--shadow);
    background-color: var(--color-white);

    @media (max-width: 1023px) {
        margin: 0 auto;
    }

    @media (max-width: 480px){
        width: calc(100% + 64px);
        transform: translateX(-32px);
    }

    .image{
        width: clamp(92px, ${100/768*100}vw, 108px);
        height: clamp(92px, ${100/768*100}vw, 108px);
        position: relative;

        &::before {
            float: left;
            padding-top: 100%;
            content: '';
        }
        &::after {
            display: block;
            content: '';
            clear: both;
        }
        img{
            border-radius: 50%;
        }
    }

    .flex{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: clamp(24px, ${36 / 768 * 100}vw, 48px);
    }

    .buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-top: 32px;
    }

    .name{
        font-weight: 500;
        font-size: clamp(14px, ${16 / 768 * 100}vw, 18px);
        line-height: 151%;
    }

    .position{
        font-weight: 300;
        font-size: clamp(14px, ${15 / 768 * 100}vw, 16px);
        line-height: 160%;
        font-feature-settings: 'ss01' on;
    }

    a{
        display: flex;
        align-items: center;
        svg{
            margin-right: 8px;
        }

        &.first{
            margin-top: clamp(0px, ${4 / 768 * 100}vw, 8px);
            font-weight: 600;
            font-size: clamp(14px, ${15 / 768 * 100}vw, 16px);
            line-height: 160%;

            svg{
                margin-right: 16px;
            }
        }
    }

    @media (max-width: 420px) {
        .flex{
            display: flex;
            flex-direction: column;
            align-items: center;
            p, a{
                text-align: center;
                margin: 0 auto;
            }
        }
        .buttons{
            flex-direction: column;
            margin-top: 16px;
        }
    }
`