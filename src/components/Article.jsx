import React from "react"
import RichText from "../components/RichText"
import AuthorCard from "./AuthorCard"
import { formatDate } from "../utils"

const Article = ({ data }) => {
  const article = data
  const richTextContent = article.childContentfulArticleBodyRichTextNode.json
  const author = article.author
  const authorPhoto = author.photo
  const articleDate = formatDate(article.updatedAt)

  return (
    <article className="article mb-4">
      <h1 className="text-3xl mb-4 xl:text-4xl">{article.title}</h1>
      <div className="flex pb-5 items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 mr-2">
            <img
              className="rounded-full"
              src={authorPhoto.file.url}
              alt={authorPhoto.title}
            />
          </div>
          <span className="text-sm">{`by ${author.name}`}</span>
        </div>
        <time className="text-xs opacity-50" dateTime={articleDate}>
          {articleDate}
        </time>
      </div>
      <div className="mb-8">
        <RichText content={richTextContent} />
      </div>
      {/* <h5 className="text-xl mb-3">About the Author</h5> */}
      <AuthorCard {...{ author }} />
    </article>
  )
}

export default Article
