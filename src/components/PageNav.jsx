import React from "react"
import Icon from "./Icon"

const pageModules = [
  {
    label: "Article",
    icon: "article-icon",
  },
  {
    label: "Comments",
    icon: "comments-icon",
  },
  {
    label: "Twitter Feed",
    icon: "twitter-icon",
  },
]

const PageNav = () => {
  return (
    <nav className="page-nav">
      {pageModules.map((pageModule, index) => {
        return (
          <button
            className="page-nav__item"
            // key={index}
            // active={this.state.activeNavItem === index}
            // onClick={() => this.handleClick(index)}
          >
            <Icon name={pageModule.icon} />
          </button>
        )
      })}
    </nav>
  )
}

const handleClick = index => {
  this.setState({
    activePageModule: index,
    activeNavItem: index,
  })
}

export default PageNav
