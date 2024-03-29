import React from "react"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="my-20 mx-auto w-48 flex flex-col justify-center items-center">
      <a href="/" className="block w-full">
        <Logo />
      </a>
    </header>
  )
}

export default Header
