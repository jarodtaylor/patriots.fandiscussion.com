import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const RecentArtitcles = () => {
  const data = useStaticQuery(graphql`
    query RecentArticlesQuery {
      allContentfulArticle(limit: 5, skip: 1) {
        edges {
          node {
            title
            createdAt(formatString: "MMMM Do, YYYY")
            slug
            author {
              name
            }
          }
        }
      }
    }
  `)

  if (data.allContentfulArticle.edges.length < 3) return null

  const renderArticleList = () => {
    const articles = data.allContentfulArticle.edges
    return articles.map(article => {
      const { title, createdAt, slug, author } = article.node
      return (
        <li
          key="slug"
          className="block border-b border-solid border-gray-300 py-2"
        >
          <a
            href={`articles/${slug}`}
            className="group block text-black h-full"
          >
            <h2 className="text-lg group-hover:text-link-blue">{title}</h2>
            <div className="flex justify-between text-xs opacity-50">
              <span>By {author.name}</span>
              <time dateTime={createdAt}>{createdAt}</time>
            </div>
          </a>
        </li>
      )
    })
  }

  return (
    <article className="mb-6">
      <h3 className="text-3xl mb-4">Recent Articles</h3>
      <ul className="mb-3">{renderArticleList()}</ul>
      <a
        href="/articles"
        className="bg-brand hover:bg-brand-700 text-white font-bold py-2 px-4 rounded w-full block text-center"
      >
        View All
      </a>
    </article>
  )
}

export default RecentArtitcles
