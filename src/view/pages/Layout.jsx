import React from 'react'
import Navbar from '../layouts/header/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </>
    )
}

export default Layout
