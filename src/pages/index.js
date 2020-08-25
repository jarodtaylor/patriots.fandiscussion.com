import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Article from "../components/Article"
import Comments from "../components/Comments"

const Home = ({ data, children }) => {
  const articles = data.allContentfulArticle.edges
  const latestArticle = articles[0].node

  return (
    <Layout data={latestArticle}>
      <Article data={latestArticle} />
      <Comments title={latestArticle.title} />
    </Layout>
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
          author {
            id
            websiteUrl
            twitterUrl
            name
            memorableMoments
            instagramUrl
            facebookUrl
            photo {
              title
              file {
                url
              }
            }
          }
          title
          createdAt(formatString: "MMMM Do, YYYY")
          id
          slug
        }
      }
    }
  }
`
