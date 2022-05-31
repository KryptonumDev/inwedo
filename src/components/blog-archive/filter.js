import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../../style"

export default function Filter({ categories: { nodes } }) {

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Grid>
                        <Item>
                            all
                        </Item>
                        {nodes.map(el => (
                            <Item>
                                {el.name}
                            </Item>
                        ))}
                    </Grid>
                    <form>
                    </form>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: var(--margin-xl);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
`

const Item = styled.button`
    white-space: nowrap;
    padding: 4px 20px;
    border: none;
    background: #EBF2F8;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;
`