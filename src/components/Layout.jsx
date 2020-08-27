import React from "react"
import PageWrapper from "../components/PageWrapper"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  )
}

export default Layout
