import React from "react"
import Icon from "./Icon"

const Footer = () => {
  return (
    <footer
      style={{ maxWidth: "90rem" }}
      className="w-11/12 my-0 mx-auto py-12 py-6 flex justify-between items-center"
    >
      <span className="inline-block w-32 h-8">
        <Icon name="fan-discussion-logo" />
      </span>
      <a
        href="mailto:jarodrtaylor@gmail.com"
        className="block w-10 h-10 text-white"
      >
        <Icon className="fill-current" name="mail-icon" />
      </a>
    </footer>
  )
}

export default Footer
