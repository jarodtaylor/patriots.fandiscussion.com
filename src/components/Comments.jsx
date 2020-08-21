import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ title }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: title },
  }

  return <DiscussionEmbed {...disqusConfig} />
}

export default Comments
