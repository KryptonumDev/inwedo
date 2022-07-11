import React, { useEffect, useState } from "react"
import Footer from "./footer"
import SubHeader from "./header-sub"
import MainHeader from './header-main'
import { Helmet } from "react-helmet";

export default function Layout({ children, location }) {

    const [isHomepage, setIsHomepage] = useState(() => {
        if (location.pathname === '/' || location.pathname === '/pl/') {
            return true
        }
        return false
    })

    useEffect(() => {
        setIsHomepage(() => {
            if (location.pathname === '/' || location.pathname === '/pl/') {
                return true
            }
            return false
        })
    }, [location])

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
            </Helmet>
            {isHomepage
                ? <MainHeader location={location} />
                : <SubHeader location={location} />}
            {children}
            <Footer location={location} />
        </React.Fragment>
    )
}