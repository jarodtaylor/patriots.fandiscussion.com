import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ title }) => {
  console.log(process.env.GATSBY_DISQUS_NAME)
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: title,
      title: title,
    },
  }

  return <DiscussionEmbed {...disqusConfig} />
}

export default Comments
