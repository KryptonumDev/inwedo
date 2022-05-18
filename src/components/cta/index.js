import React from 'react'
import styled from 'styled-components'
import { Container } from '../../style'
import Type2 from './title_button'
import Type4 from './white_title_button'

export default function CallToAction({ data: { typeOfCta, title, text, form, button, downloadFile } }) {
    return (
        <Wrapper>
            <Container>
                {(() => {
                    switch (typeOfCta) {
                        case 'one':
                            return null
                        case 'two':
                            return <Type2 title={title} button={button} />
                        case 'three':
                            return null
                        case 'four':
                            return <Type4 title={title} button={button}/>
                        case 'five':
                            return null
                        case 'six':
                            return null
                        case 'seven':
                            return null
                    }
                })()}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`