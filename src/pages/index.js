import React from "react"
import { graphql } from "gatsby"
import Logo from "../components/Logo"
import MainContent from "../components/MainContent"

const Home = ({ data, children }) => {
  return (
    <div className="relative z-10">
      <header className="my-20 mx-auto w-48 flex flex-col justify-center items-center">
        <Logo />
      </header>
      <MainContent {...{ data }}>{children}</MainContent>
    </div>
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
