import React from "react"
import Footer from "./footer"
import Header from "./header"
import { Helmet } from "react-helmet";

export default function Layout({ children, location }) {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
            </Helmet>
            <Header location={location} />
            {children}
            <Footer location={location} />
        </React.Fragment>
    )
}