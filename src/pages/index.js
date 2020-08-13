import React from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import HomePageHero from "../components/HomePageHero"
import Logo from "../components/Logo"
import RichText from "../components/RichText"
import MainContent from "../components/MainContent"
import PageNav from "../components/PageNav"

class Home extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articles = get(this, "props.data.allContentfulArticle.edges")
    const article = articles[0].node

    return (
      <>
        <div style={{ position: "relative", zIndex: 1 }}>
          <HomePageHero>
            <Logo />
          </HomePageHero>
          <MainContent>
            <PageNav />
            <h1>{article.title}</h1>
            <a href="//google.com" className="btn">
              Testing Button
            </a>
            <RichText content={article} />
          </MainContent>
        </div>
      </>
    )
  }
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
