import React, { useEffect, useLayoutEffect, useState } from "react"
// import { Timeline } from "react-twitter-widgets"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { useTimer } from "react-timer-hook"

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => restart(expiryTimestamp),
  })

  return (
    <div>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}

const TwitterFeed = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 30) // 10 minutes timer

  const refreshFeed = () => {
    const twitterIframe = document.querySelector("#twitter-feed iframe")
    twitterIframe.src = twitterIframe.src
  }

  useLayoutEffect(() => {
    // setTimeout(() => {
    //   setInterval(refreshFeed, 300000)
    // }, 5000)
  }, [])

  return (
    <article>
      <h3 className="text-3xl mb-4">Twitter Feed</h3>
      <button onClick={refreshFeed}>Reload</button>
      <Timer expiryTimestamp={time} />
      <div id="twitter-feed" className="lg:h-90vh lg:overflow-scroll">
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
