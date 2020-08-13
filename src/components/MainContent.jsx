import React from "react"

const MainContent = ({ children }) => {
  return (
    <main className="bg-white min-h-screen lg:w-11/12 lg:max-w-6xl lg:m-auto lg:rounded-md lg:shadow-2xl">
      {children}
    </main>
  )
}

export default MainContent
