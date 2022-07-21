import React, { useEffect, useState } from "react"
import Footer from "./footer"
import SubHeader from "./header-sub"
import MainHeader from './header-main'
import CokieBanner from "./cookies"

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

    const [isAlreadyApplied, setIsAllreadyApplied] = useState(null)

    return (
        <React.Fragment>
            <CokieBanner isAlreadyApplied={isAlreadyApplied} setIsAllreadyApplied={setIsAllreadyApplied} location={location}/>
            {isHomepage
                ? <MainHeader location={location} />
                : <SubHeader location={location} />}
            {children}
            <Footer setIsAllreadyApplied={setIsAllreadyApplied} location={location} />
        </React.Fragment>
    )
}