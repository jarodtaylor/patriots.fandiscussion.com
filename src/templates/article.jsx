import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Article from "../components/Article"
import Comments from "../components/Comments"
import MainContent from "../components/MainContent"
import RecentArticles from "../components/RecentArticles"

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      body {
        raw
      }
      author {
        id
        websiteUrl
        twitterUrl
        name
        memorableMoments
        instagramUrl
        facebookUrl
        slug
        photo {
          title
          file {
            url
          }
        }
      }
      title
      updatedAt
      id
      slug
    }
  }
`

const ArticleTemplate = props => {
  return (
    <Layout>
      <MainContent>
        <div className="pt-4">
          <div className="py-6 lg:grid lg:grid-cols-9 lg:gap-16">
            <section className={`lg:col-span-6 mb-6 lg:mb-0`}>
              <Article data={props.data.contentfulArticle} />
              <Comments
                title={props.data.contentfulArticle.title}
                slug={props.data.contentfulArticle.slug}
              />
            </section>
            <aside
              className={`lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-3`}
            >
              <RecentArticles />
              {/* <div
              className={`lg:sticky lg:top-0 lg:pt-2 ${
                activePageModule === 1 ? "block" : "hidden"
              } lg:block`}
            >
              <TwitterFeed />
            </div> */}
            </aside>
          </div>
        </div>
      </MainContent>
    </Layout>
  )
}

export default ArticleTemplate
