import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainContent from "../components/MainContent"
import { CommentCount } from "disqus-react"

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
    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: {
        identifier: slug,
        title: title,
      },
    }
    return (
      <li
        key={slug}
        className="border-b botder-solid border-gray-300 pt-3 lg:px-0"
      >
        <h2 className="text-2xl leading-6 mb-2 md:text-3xl md:pt-1 lg:text-4xl lg:mb-4 lg:mt-2">
          <a href={`/articles/${slug}`}>{title}</a>
        </h2>
        <div className="flex pb-3 items-center justify-between">
          <time
            className="text-xs opacity-75 block uppercase lg:text-sm"
            dateTime={createdAt}
          >
            {createdAt}
          </time>
          <div className="uppercase text-sm opacity-75">
            <CommentCount {...disqusConfig}>Placeholder Text</CommentCount>
          </div>
        </div>
      </li>
    )
  })
}

const AuthorIndex = props => {
  const authorName = props.data.contentfulAuthor.name
  const authorArticles = props.data.allContentfulArticle.edges

  return (
    <Layout>
      <MainContent>
        <h4 className="text-3xl pt-2 mb-2">Articles by {authorName}</h4>
        <ul>{renderArticleList(authorArticles)}</ul>
      </MainContent>
    </Layout>
  )
}

export default AuthorIndex
