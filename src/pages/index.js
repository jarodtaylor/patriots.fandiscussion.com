import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainContent from "../components/MainContent"
import Article from "../components/Article"
import Comments from "../components/Comments"
import TwitterFeedManual from "../components/TwitterFeedManual"
import PageNav from "../components/PageNav"
import RecentArticles from "../components/RecentArticles"

const Home = ({ data, children }) => {
  const articles = data.allContentfulArticle.edges
  const latestArticle = articles[0].node

  const [activePageModule, setActivePageModule] = useState(0)

  const handleClick = index => {
    setActivePageModule(index)
  }

  return (
    <Layout>
      <PageNav {...{ activePageModule, handleClick }} />
      <MainContent>
        <div className="py-6 lg:grid lg:grid-cols-9 lg:gap-16">
          <section
            className={`lg:col-span-9 mb-6 lg:mb-0 ${
              activePageModule === 0 ? "block" : "hidden"
            } lg:block`}
          >
            <Article data={latestArticle} />
            <Comments title={latestArticle.title} slug={latestArticle.slug} />
          </section>
          {/* <aside
            className={`lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-3`}
          >
            <RecentArticles />
            <div
              className={`lg:sticky lg:top-0 lg:pt-2 ${
                activePageModule === 1 ? "block" : "hidden"
              } lg:block`}
            >
              <TwitterFeedManual />
            </div>
          </aside> */}
        </div>
      </MainContent>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle {
      edges {
        node {
          body {
            raw
          }
          childrenContentfulArticleGamePredictionsJsonNode {
            gameAnalysis
            screenName
            scorePrediction
            boldPrediction
            whoWins
            id
          }
          author {
            id
            websiteUrl
            twitterUrl
            name
            slug
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
          createdAt(formatString: "MMMM Do, YYYY")
          id
          slug
        }
      }
    }
  }
`
