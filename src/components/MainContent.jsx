import React from "react"

const MainContent = ({ children }) => {
  return (
    <main
      style={{ maxWidth: "90rem" }}
      className="bg-white min-h-screen px-4 lg:p-10 lg:w-11/12 lg:max-w-6xl lg:m-auto lg:rounded-md lg:shadow-2xl"
    >
      {children}
    </main>
  )
}

export default MainContent
