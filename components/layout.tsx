import Navbar from './navbar'
import Footer from './footer'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}