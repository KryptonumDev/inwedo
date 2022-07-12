import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Arrow from './../../images/select-arrow.svg'

export default function ContactForm({ data: { emailInput, interestedInput, messageInput, nameInput, phoneInput, privacyPolice, submit } }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' })

    const Submit = (data) => {
    }

    return (
        <Wrapper arrow={Arrow} onSubmit={handleSubmit((data) => Submit(data))}>
            <label>
                <span>{nameInput.label}</span>
                <input {...register('name', { required: true, pattern: /^[a-z ,.'-]+$/i })} placeholder={nameInput.placeholder} />
            </label>
            <label>
                <span>{emailInput.label}</span>
                <input {...register('mail', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={emailInput.placehoder} />
            </label>
            <label>
                <span>{phoneInput.label}</span>
                <input {...register('phone', { pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g })} placeholder={phoneInput.placeholder} />
            </label>
            <label className="select">
                <span>{interestedInput.label}</span>
                <select  {...register('select')} >
                    {interestedInput.options.map((el, index) => (
                        <option selected={index === 0 ? true : false} value={el.text}>{el.text}</option>
                    ))}
                </select>
            </label>
            <label>
                <span>{messageInput.label}</span>
                <textarea {...register('message')} placeholder={messageInput.placeholder} rows='6' />
            </label>
            <label className="confirm">
                <input type='checkbox' {...register('check', { required: true })} />
                <span dangerouslySetInnerHTML={{ __html: privacyPolice }} />
            </label>
            <button className="button">{submit}</button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: grid;
    grid-gap: 22px;

    input, textarea, select{
        &:focus-visible{
            border-color: blue;
            outline: none;
        }
    }

    label{
        display: grid;

        span{
            padding: 0 0 5px 8px;
        }

        input, select, textarea{
            padding: 12px 16px;
            border: 1px solid #C1D6E9;
            border-radius: 6px;
            background-color: #fff;

            
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
                color: #C1D6E9;
            }

            *{
                color: var(--color-black);
            }
        }

        &.confirm{
            margin-top: 22px;
            grid-template-columns: auto 1fr;
            grid-gap: 22px;

            span{
                padding: 0;
                font-family: 'Lexend';
                font-weight: 300;
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.005em;

                a{
                    background: var(--color-accent);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            }

            input{
                appearance: none;
                background-color: transparent;
                border: 1px solid #C1D6E9;
                display: block;
                transition: border 0.2s ease-out;
                padding: 0;
                width: 24px;
                height: 24px;
                border-radius: 6px;
                position: relative;

                &::after {
                    content: '✓';
                    font-size: 24px;
                    font-weight: 300;
                    transition: 120ms transform ease-in-out;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%) scale(0);
                    border-radius: 3px;
                    font-weight: 900;
                    z-index: 3;
                }

                &:checked {
                    &::after {
                        transform: translateX(-50%) translateY(-50%) scale(0.8);
                    }
                }
            }
        }

        &.select{
            position: relative;

            &::after{
                content: url(${props => props.arrow});
                position: absolute;
                right: 12px;
                bottom: 12px;
                pointer-events: none;
            }

            select{
                appearance: none;
            }
        }
    }

    button{
        width: 100%;
        text-align: center;
        justify-content: center;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        border: none;
    }
`