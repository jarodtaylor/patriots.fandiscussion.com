import React from "react"
import RichText from "../components/RichText"
import AuthorCard from "./AuthorCard"

const Article = ({ data }) => {
  const article = data
  const richTextContent = article.childContentfulArticleBodyRichTextNode.json
  const author = article.author
  const authorPhoto = author.photo

  return (
    <article className="article mb-4 pt-4">
      <h1 className="text-3xl mb-4 leading-10 xl:text-4xl">{article.title}</h1>
      <div className="flex pb-5 items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 mr-2 lg:w-10">
            <img
              className="rounded-full"
              src={authorPhoto.file.url}
              alt={authorPhoto.title}
            />
          </div>
          <a
            href={`articles/${author.slug}`}
            className="text-sm lg:text-base text-black underline"
          >{`by ${author.name}`}</a>
        </div>
        <time
          className="text-xs opacity-50 lg:text-sm"
          dateTime={article.createdAt}
        >
          {article.createdAt}
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
