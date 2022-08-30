import React from "react"
// import { Timeline } from "react-twitter-widgets"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const TwitterFeed = () => {
  return (
    <article>
      <h3 className="text-3xl mb-4">Twitter Feed</h3>
      <div className="lg:h-90vh lg:overflow-scroll">
        <TwitterTimelineEmbed
          sourceType="list"
          url="https://twitter.com/jarodtaylor/lists/patriots-news"
        />
        {/* <Timeline
          dataSource={{
            sourceType: "url",
            url: "https://twitter.com/jarodtaylor/lists/patriots-news",
          }}
          // onLoad={() => console.log('Timeline is loaded!')}
          options={{
            chrome: "noheader nofooter",
            "aria-polite": "rude",
            id: "profile:twitterdev",
          }}
        /> */}
      </div>
    </article>
  )
}

export default TwitterFeed
