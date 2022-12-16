import React from "react"
import "../assets/icons/twitter-icon.svg"
import "../assets/icons/comments-icon.svg"
import "../assets/icons/article-icon.svg"
import "../assets/icons/fan-discussion-logo.svg"
import "../assets/icons/mail-icon.svg"
import "../assets/icons/facebook-icon.svg"
import "../assets/icons/twitter-icon2.svg"
import "../assets/icons/instagram-icon.svg"
import "../assets/icons/www-icon.svg"

const styles = {
  color: "inherit",
  fill: "currentColor",
  width: "100%",
  height: "inherit",
  display: "block",
}

const Icon = ({ name, className }) => {
  return (
    <svg className={className} style={styles}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon
