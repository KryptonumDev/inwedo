import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Arrow from './../../images/select-arrow.svg'

export default function GetForm({ data: { inputPlaceholder, submitButtonText } }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' })

    const Submit = (data) => {
    }

    return (
        <Wrapper arrow={Arrow} onSubmit={handleSubmit((data) => Submit(data))}>
            <label>
                <span>{inputPlaceholder}</span>
                <input {...register('mail', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={inputPlaceholder} />
            </label>
            <button className="button-white"><span className="colored">{submitButtonText}</span></button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 32px;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        max-width: 284px;
        margin: 0 auto;

        button{
            margin: 0 auto;
        }
    }

    label{
        span{
            display: none;
        }
    }

        input, select, textarea{
            padding: 12px 16px;
            border: 1px solid #C1D6E9;
            border-radius: 6px;
            background-color: #fff;
            width: 100%;
            box-sizing: border-box;
            min-width: 200px;
            
            font-family: 'Lexend';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: 0.005em;
            color: var(--color-black);


            &::placeholder, *{
                font-family: 'Lexend';
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 21px;
                letter-spacing: 0.005em;

                
                background: var(--color-accent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }

            *{
                color: var(--color-black);
            }
        }



    button{
        text-align: center;
        justify-content: center;
        font-weight: 300;
        font-size: clamp(14px, 2.08vw, 18px);
        line-height: 30px;
        border: none;

        span{
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
        }
    }
`