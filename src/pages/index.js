import React from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import RichText from "../components/RichText"

class Home extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const articles = get(this, 'props.data.allContentfulArticle.edges')
    const article = articles[0].node
    

    return (
      <>
        <h1>{article.title}</h1>
        <a href="//google.com" className="btn">Testing Button</a>
        <RichText content={article} />
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