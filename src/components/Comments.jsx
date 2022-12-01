import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ title, slug, id }) => {
  const uniqueURL = `https://patriots.fandiscussion.com/articles/${id}/${slug}`
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: id,
      title: title,
      url: uniqueURL,
    },
  }

  // console.log(
  //   `
  //   indentifier: ${disqusConfig.config.identifier} | title: ${disqusConfig.config.title} | URL: ${disqusConfig.config.url}
  //   `
  // )

  return (
    <article>
      <h3 id="#comments" className="text-3xl mb-4">
        Discussion
      </h3>
      <DiscussionEmbed {...disqusConfig} />
    </article>
  )
}

export default Comments
