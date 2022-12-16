import React, { useEffect, useLayoutEffect } from "react"

function App() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://platform.twitter.com/widgets.js"

    script.async = true

    // script.integrity =
    //   "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"

    // script.crossOrigin = "anonymous"

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])

  return (
    <article>
      <h3 className="text-3xl mb-4">Twitter Feed</h3>
      <div className="lg:h-90vh lg:overflow-scroll">
        <a
          className="twitter-timeline"
          href="https://twitter.com/jarodtaylor/lists/patriots-news?ref_src=twsrc%5Etfw"
          data-chrome="nofooter noborders noheader"
          data-aria-polite="rude"
        >
          *
        </a>
      </div>
    </article>
  )

  useLayoutEffect(() => {
    console.log("uselayouteffect invoked")
    return
  })
}

export default App
