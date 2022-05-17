import React from React
import styled from 'styled-components'
import { Container } from '../../style'
import Type3 from './title_button_photo'

export default function CallToAction({ data }) {

    return (
        <Wrapper>
            <Container>
                {'switch'}
                <Type3 />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`