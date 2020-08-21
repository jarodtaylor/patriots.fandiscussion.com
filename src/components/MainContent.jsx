import React, { useState } from "react"
import PageNav from "../components/PageNav"
import Comments from "./Comments"
import TwitterFeed from "./TwitterFeed"
import Article from "./Article"

const MainContent = ({ data }) => {
  const articles = data.allContentfulArticle.edges
  const latestArticle = articles[0].node

  const [activePageModule, setActivePageModule] = useState(0)

  const handleClick = index => {
    setActivePageModule(index)
  }

  return (
    <main
      style={{ maxWidth: "90rem" }}
      className="bg-white min-h-screen lg:p-10 lg:w-11/12 lg:max-w-6xl lg:m-auto lg:rounded-md lg:shadow-2xl"
    >
      <PageNav {...{ activePageModule, handleClick }} />
      <div className="py-6 px-4 lg:grid lg:grid-cols-9 lg:grid-rows-2 lg:gap-16">
        <section className="lg:col-span-6">
          <Article data={latestArticle} />
        </section>
        <section className="lg:col-span-6">
          <article>
            <h3>Discussion</h3>
            <Comments title={latestArticle.title} />
          </article>
        </section>
        <aside className="lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-3">
          <article className="lg:sticky lg:top-0 lg:overflow-scroll lg:h-90vh">
            <h3 className="text-2xl">Twitter</h3>
            <TwitterFeed />
          </article>
        </aside>
      </div>
    </main>
  )
}

export default MainContent
