import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children, location }) {
    return (
        <React.Fragment>
            <Header location={location} />
            {children}
            <Footer location={location} />
        </React.Fragment>
    )
}