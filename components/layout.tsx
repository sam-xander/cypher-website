import Footer from "./Footer";
import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
