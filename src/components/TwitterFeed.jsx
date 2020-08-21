import React from "react"
import { Timeline } from "react-twitter-widgets"

const TwitterFeed = () => {
  return (
    <Timeline
      dataSource={{
        sourceType: "url",
        url: "https://twitter.com/jarodtaylor/lists/patriots-news",
      }}
      // onLoad={() => console.log('Timeline is loaded!')}
      options={{
        chrome: "noheader nofooter",
        "aria-polite": "rude",
      }}
    />
  )
}

export default TwitterFeed
