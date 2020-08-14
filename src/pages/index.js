import React from "react"
import { graphql } from "gatsby"
import PageWrapper from "../components/PageWrapper"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"

const Home = ({ data, children }) => {
  return (
    <PageWrapper>
      <Header />
      <MainContent {...{ data }}>{children}</MainContent>
      <Footer />
    </PageWrapper>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle {
      edges {
        node {
          childContentfulArticleBodyRichTextNode {
            json
          }
          title
          updatedAt
        }
      }
    }
  }
`
