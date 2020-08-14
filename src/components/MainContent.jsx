import React, { useState } from "react"
import PageNav from "../components/PageNav"
import RichText from "../components/RichText"

const MainContent = ({ data }) => {
  const articles = data.allContentfulArticle.edges
  const latestArticle = articles[0].node
  const richTextContent =
    latestArticle.childContentfulArticleBodyRichTextNode.json

  const [activePageModule, setActivePageModule] = useState(0)

  const handleClick = index => {
    setActivePageModule(index)
  }

  return (
    <main
      style={{ maxWidth: "90rem" }}
      className="bg-white min-h-screen lg:w-11/12 lg:max-w-6xl lg:m-auto lg:rounded-md lg:shadow-2xl"
    >
      <PageNav {...{ activePageModule, handleClick }} />
      <article>
        <RichText content={richTextContent} />
      </article>
    </main>
  )
}

export default MainContent
