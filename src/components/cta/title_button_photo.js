import React from "react"

export default () => (
    <ContentWrapper>
        <Content>

        </Content>
    </ContentWrapper>
)

export const ContentWrapper = styled.div`
    background: var(--color-accent);
    backdrop-filter: blur(140px);
    border-radius: 24.5221px;
`

export const Content = styled.div`
    max-width: 756px;
    margin: 0 auto;
    padding: 100px 30px;
`