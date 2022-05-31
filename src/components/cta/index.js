import React from 'react'
import styled from 'styled-components'
import { Container } from '../../style'
import Type1 from './title_p_button'
import Type2 from './title_button'
import Type4 from './white_title_button'
import Type5 from './white_title_button_photo'
import Type6 from './downalod_form'
import Type7 from './newsletter'
import Type8 from './title_foto_file'

export default function CallToAction({ data: { typeOfCta, title, text, form, button, downloadFile, image, buttonText } }) {
    return (
        <Wrapper>
            <Container>
                {(() => {
                    switch (typeOfCta) {
                        case 'one':
                            return <Type1 title={title} text={text} button={button} />
                        case 'two':
                            return <Type2 title={title} button={button} />
                        case 'three':
                            return null
                        case 'four':
                            return <Type4 title={title} button={button} />
                        case 'five':
                            return <Type5 title={title} button={button} image={image} />
                        case 'six':
                            return <Type6 title={title} text={text} image={image} form={form} />
                        case 'seven':
                            return <Type7 title={title} form={form}/>
                        case 'eight':
                            return <Type8 title={title} downloadFile={downloadFile} image={image} button={buttonText} />
                    }
                })()}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`