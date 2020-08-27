import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainContent from "../components/MainContent"
import { CommentCount } from "disqus-react"

export const query = graphql`
  query {
    allContentfulArticle {
      edges {
        node {
          title
          slug
          author {
            name
            slug
            photo {
              title
              file {
                url
              }
            }
          }
          createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const renderArticleList = articles => {
  return articles.map(article => {
    const { slug, title, createdAt, author } = article.node
    const articleUrl = `/articles/${slug}`
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
        className="px-2 border-b botder-solid border-gray-300 pt-3"
      >
        <time
          className="text-xs opacity-50 block uppercase lg:text-sm"
          dateTime={createdAt}
        >
          {createdAt}
        </time>
        <h2 className="text-2xl leading-6 mb-2 md:text-3xl md:pt-1 lg:text-4xl lg:mb-4 lg:mt-2">
          <a href={articleUrl}>{title}</a>
        </h2>
        <div className="flex pb-3 items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 mr-2 lg:w-12">
              <img
                className="rounded-full"
                src={author.photo.file.url}
                alt={author.photo.title}
              />
            </div>
            <a
              href={`/articles/${author.slug}`}
              className="text-sm lg:text-base text-black underline"
            >{`by ${author.name}`}</a>
          </div>

          <div className="uppercase text-sm opacity-75">
            <CommentCount {...disqusConfig}>Placeholder Text</CommentCount>
          </div>
        </div>
      </li>
    )
  })
}

const ArticleIndex = props => {
  const authorArticles = props.data.allContentfulArticle.edges

  return (
    <Layout>
      <MainContent>
        <ul>{renderArticleList(authorArticles)}</ul>
      </MainContent>
    </Layout>
  )
}

export default ArticleIndex
