import React from "react"

const Header = ({ text }) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl hover:text-red-500 transition-colors">
        Calculadora Super Simples
      </h1>
      <h1 className="text-xl">{text}</h1>
    </div>
  )
}

export default Header
