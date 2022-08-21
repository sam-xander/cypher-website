import Navbar from './navbar'
import Footer from './footer'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}