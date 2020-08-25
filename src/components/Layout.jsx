import React from "react"
import PageWrapper from "../components/PageWrapper"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"

const Layout = ({ data, children }) => {
  // const articles = data.allContentfulArticle.edges
  // const latestArticle = articles[0].node

  // const [activePageModule, setActivePageModule] = useState(0)

  // const handleClick = index => {
  //   setActivePageModule(index)
  // }

  return (
    <PageWrapper>
      <Header />
      <MainContent {...{ data }}>{children}</MainContent>
      <Footer />
    </PageWrapper>
  )
}

export default Layout
