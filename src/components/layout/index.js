import Footer from "./footer"
import Header from "./header"
import React, { useEffect } from "react";

export default function Layout({ children, location }) {

    const scrollRef = React.createRef();

    useEffect(() => {
        import("locomotive-scroll").then(locomotiveModule => {
            const scroll = new locomotiveModule.default({
                el: scrollRef.current,
                smooth: true,
            })
            window.scroll = locomotiveModule


            return () => {
                if (locomotiveModule) locomotiveModule.destroy()
            }
        })
    }, []);

    return (
        <div ref={scrollRef}>
            <Header location={location} />
            <main >
                {children}
            </main>
            <Footer location={location} />
        </div>
    )
}