import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Article from "../components/Article"
import Comments from "../components/Comments"
import MainContent from "../components/MainContent"

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
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
      updatedAt
      id
      slug
    }
  }
`

const ArticleTemplate = props => {
  return (
    <Layout>
      <MainContent>
        <div className="pt-4">
          <Article data={props.data.contentfulArticle} />
          <Comments title={props.data.contentfulArticle.title} />
        </div>
      </MainContent>
    </Layout>
  )
}

export default ArticleTemplate
