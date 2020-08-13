import React from "react"
import "../assets/icons/twitter-icon.svg"
import "../assets/icons/comments-icon.svg"
import "../assets/icons/article-icon.svg"
import "../assets/icons/fan-discussion-logo.svg"
import "../assets/icons/mail-icon.svg"

const styles = {
  color: "inherit",
  fill: "currentColor",
  width: "100%",
  height: "inherit",
  display: "block",
}

export default ({ name, className }) => {
  return (
    <svg className={className} style={styles}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
