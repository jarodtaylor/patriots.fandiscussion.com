import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ title }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: title,
      title: title,
    },
  }

  return (
    <article>
      <h3 className="text-3xl mb-4">Discussion</h3>
      <DiscussionEmbed {...disqusConfig} />
    </article>
  )
}

export default Comments
