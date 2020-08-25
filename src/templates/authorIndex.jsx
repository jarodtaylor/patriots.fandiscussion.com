import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulAuthor(slug: { eq: $slug }) {
      name
    }
    allContentfulArticle(filter: { author: { slug: { eq: $slug } } }) {
      edges {
        node {
          title
          slug
          author {
            name
          }
          createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const renderArticleList = articles => {
  return articles.map(article => {
    const { slug, title, createdAt } = article.node
    return (
      <li key={slug}>
        <a href={`/articles/${slug}`}>{title}</a>
        <time>{createdAt}</time>
      </li>
    )
  })
}

const AuthorIndex = props => {
  const authorName = props.data.contentfulAuthor.name
  const authorArticles = props.data.allContentfulArticle.edges

  return (
    <Layout data={props.data}>
      <h4>Articles by {authorName}</h4>
      <ul>{renderArticleList(authorArticles)}</ul>
    </Layout>
  )
}

export default AuthorIndex
