import React from 'react'
import Layout from './src/components/layout'
import './src/style/index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)