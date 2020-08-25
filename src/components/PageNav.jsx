import React from "react"
import Icon from "./Icon"

const pageModules = [
  {
    icon: "article-icon",
  },
  // {
  //   icon: "comments-icon",
  // },
  {
    icon: "twitter-icon",
  },
]

const PageNav = ({ activePageModule, handleClick }) => {
  return (
    <nav className="page-nav lg:hidden">
      {pageModules.map((pageModule, index) => {
        return (
          <button
            className={`page-nav__item ${
              activePageModule === index ? " page-nav__item--active" : ""
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <Icon name={pageModule.icon} />
          </button>
        )
      })}
    </nav>
  )
}

export default PageNav
