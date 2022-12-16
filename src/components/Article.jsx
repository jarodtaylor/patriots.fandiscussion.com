import React from "react"
import RichText from "../components/RichText"
import AuthorCard from "./AuthorCard"

const Article = ({ data }) => {
  const article = data
  const richTextContent = article.body
  const gamePredictions =
    article.childrenContentfulArticleGamePredictionsJsonNode
  const author = article.author
  const authorPhoto = author.photo

  const renderPredictions = predictions => {
    return (
      <>
        <h2 className="text-2xl mb-4 lg:text-3xl">Thoughts from the board</h2>
        {predictions.map(prediction => {
          return (
            <div key={prediction.id}>
              <h3 className="text-xl mb-4 lg:text-2xl">
                {prediction.screenName}
              </h3>
              <p className="mb-4 lg:text-lg">{prediction.gameAnalysis}</p>
              <p className="mb-4 lg:text-lg">
                {prediction.whoWins} win {prediction.scorePrediction}
              </p>
              <p className="mb-4 lg:text-lg">
                <b className="article-bold">Bold Prediction</b>:{" "}
                {prediction.boldPrediction}
              </p>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <article className="article mb-4 pt-4 lg:pt-0">
      <h1 className="text-3xl mb-4 leading-10 xl:text-4xl lg:leading-tight">
        {article.title}
      </h1>
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
            href={`/articles/${author.slug}`}
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
        {gamePredictions &&
          gamePredictions.length > 0 &&
          renderPredictions(gamePredictions)}
      </div>
      {/* <h5 className="text-xl mb-3">About the Author</h5> */}
      <AuthorCard {...{ author }} />
    </article>
  )
}

export default Article
