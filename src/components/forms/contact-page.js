import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import styled from "styled-components"
import Arrow from './../../images/select-arrow.svg'
import axios from "axios"
import Select from 'react-select'
import { motion } from "framer-motion"

export default function ContactForm({ data: { emailInput, interestedInput, messageInput, nameInput, phoneInput, privacyPolice, submit, privacyPolicyErrorText, newsletterAgreement }, lang }) {

    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: 'onBlur' })
    const [isSended, changeIsSended] = useState(null)
    const [sendedCount, changeSendedCount] = useState(0)

    const Submit = (data) => {
        axios.post('https://hook.eu1.make.com/w2y1gjybwxxdnf4fxcguccywi36dihlw', {
            name: data.name,
            email: data.mail,
            phone: data.phone,
            'interested in': data.options,
            message: data.message,
            newsletter: data.newsletter,
            language: lang
        })
            .then((res) => {
                if (res.status === 200) {
                    changeIsSended('success')
                    changeSendedCount(sendedCount + 1)
                    reset()
                } else {
                    changeIsSended('error')
                    changeSendedCount(sendedCount + 1)
                }
            })
    }

    const options = []

    interestedInput.options.forEach(el => {
        options.push({ value: el.text, label: el.text })
    })

    return (
        <Wrapper arrow={Arrow} onSubmit={handleSubmit((data) => Submit(data))}>
            <label>
                <span>{nameInput.label}</span>
                <input className={errors.name ? 'error' : null} {...register('name', { required: true, pattern: /^[a-z ,.'-]+$/i })} placeholder={nameInput.placeholder} />
                {errors.name && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {nameInput.errorMessage}
                    </motion.p>
                )}
            </label>
            <label>
                <span>{emailInput.label}</span>
                <input className={errors.mail ? 'error' : null} {...register('mail', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder={emailInput.placehoder} />
                {errors.mail && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {emailInput.errorMessage}
                    </motion.p>
                )}
            </label>
            <label>
                <span>{phoneInput.label}</span>
                <input type='tel' className={errors.phone ? 'error' : null} {...register('phone', { pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g })} placeholder={phoneInput.placeholder} />
                {errors.phone && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {phoneInput.errorMessage}
                    </motion.p>
                )}
            </label>
            <label className="select">
                <span>{interestedInput.label}</span>
                <Controller
                    control={control}
                    defaultValue={options[0].value}
                    name="options"
                    render={({ field: { onChange, value, ref } }) => (
                        <Select
                            className="react-select"
                            classNamePrefix="react-select"
                            options={options}
                            inputRef={ref}
                            value={options.filter(c => value.includes(c.value))}
                            onChange={(val) => onChange(val.value)}
                        />
                    )} />
            </label>
            <label>
                <span>{messageInput.label}</span>
                <textarea {...register('message')} placeholder={messageInput.placeholder} rows='6' />
            </label>
            <label className="confirm">
                <input type='checkbox' {...register('newsletter')} />
                <span dangerouslySetInnerHTML={{ __html: newsletterAgreement }} />
            </label>
            <label className="confirm">
                <input className={errors.check ? 'error' : null} type='checkbox' {...register('check', { required: true })} />
                <span dangerouslySetInnerHTML={{ __html: privacyPolice }} />
                {errors.check && (
                    <motion.p
                        initial={{ opacity: 0, bottom: -6 }}
                        animate={{ opacity: 1, bottom: 0 }}
                        exit={{ opacity: 1, bottom: -6 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="errorText"
                    >
                        {privacyPolicyErrorText}
                    </motion.p>
                )}
            </label>
            <button className="button">{submit}</button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: grid;
    grid-gap: 24px;

    .react-select__control{
        border-color: #C1D6E9;

        &:hover{
            border-color: #C1D6E9;
        }
    }

    .react-select__value-container{
        padding: 8px 16px;
        cursor: pointer;
    }

    .errorText{
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 16px;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.005em;
        color: #EB5757;

        &.submit{
            transform: translateY(150%);
        }
    }

    input, textarea, select{
        &:focus-visible{
            border-color: blue;
            outline: none;
        }
    }

    label{
        display: grid;
        position: relative;

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

            &.error{
                border-color: #EB5757 !important;
                &::placeholder{
                    color: #EB5757 !important;
                }
            }


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
            grid-template-columns: auto 1fr;
            grid-gap: 22px;

            .errorText{
                left: 46px;
            }

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

                    border-radius: 2px;
                    position: relative;
                    width: fit-content;

                    &::after{
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 2px;
                        background: var(--color-accent);
                        transition: width .3s cubic-bezier(0.23, 1, 0.320, 1);
                    }
                    
                    &:hover{
                        &::after{
                            width: 100%;
                        }
                    }
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
        margin-top: 6px;
    }
`