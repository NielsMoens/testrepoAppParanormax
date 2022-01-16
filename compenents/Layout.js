import Header from "./App/Header/Header";
import React from "react";
import Footer from "./App/Footer/Footer";

const Layout = ( {children} ) => {
    return(
        <>
            <Header/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default Layout