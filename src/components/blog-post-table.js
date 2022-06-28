import React from "react"
import styled from "styled-components"
import { Container } from "../style"

export default function Table({ data: { tableTitle, columnCount, row }, index }) {
    return (
        <Wrapper id={index}>
            <LocContainer>
                <Grid isTitled={!!tableTitle} count={columnCount}>
                    {tableTitle
                        ? <div className="title">{tableTitle}</div>
                        : null}
                    <div className="content">
                        {row.map(el => {
                            if (columnCount === 1) {
                                return (
                                    <div className="row">
                                        <div>
                                            {el.cellFirst}
                                        </div>
                                    </div>
                                )
                            }
                            if (columnCount === 2) {
                                return (
                                    <div className="row">
                                        <div>
                                            {el.cellFirst}
                                        </div>
                                        <div>
                                            {el.cellSecond}
                                        </div>
                                    </div>
                                )
                            }
                            if (columnCount === 3) {
                                return (
                                    <div className="row">
                                        <div>
                                            {el.cellFirst}
                                        </div>
                                        <div>
                                            {el.cellSecond}
                                        </div>
                                        <div>
                                            {el.cellThird}
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div className="row">
                                    <div>
                                        {el.cellFirst}
                                    </div>
                                    <div>
                                        {el.cellSecond}
                                    </div>
                                    <div>
                                        {el.cellThird}
                                    </div>
                                    <div>
                                        {el.cellFourth}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Grid>
            </LocContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-top: var(--margin-section);
`

const LocContainer = styled(Container)`
    max-width: 1240px;
`

const Grid = styled.div`
    display: grid;
    border: 1px solid #00000016;
    border-radius: 8px;
    box-shadow: var(--shadow);

    .content{

    }

    .title{
        text-align: center;
        border-bottom: 1px solid #00000016;
        padding: 12px 8px;
        background-color: var(--color-white);

        font-weight: 400;
        font-size: clamp(16px,3.125vw,24px);
        line-height: 151%;

        ${props => props.isTitled ? `
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        ` : null}
    }

    .row{
        display: grid;
        grid-template-columns: repeat(${props => props.count}, 1fr);
        padding: 0 8px;
        background-color: #fff;

        &:nth-child(1){
            text-align: center;
            text-transform: capitalize;

            div{
                font-weight: 500 !important;
            }

            ${props => props.isTitled ? null : `
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            `}
        }

        &:nth-child(n){
            border-bottom: 1px solid #00000016;
        }

        &:last-child{
            border-bottom: unset;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        div{
            font-weight: 300;
            font-size: clamp(11px, ${14 / 768 * 100}vw, 16px);
            line-height: 160%;
            font-feature-settings: 'ss01' on; 
            padding: 8px 4px;

            &:nth-child(n+1){
                border-right: 1px solid #00000016;

                @media (max-width: 580px) {
                    border-right: unset;
                }
            }

            &:last-child{
                border-right: unset;
            }
        }
    }
`