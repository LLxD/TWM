import React from "react"

const meuPrimeiroComponente = ({ text }) => {
  return (
    <div>
      <h1 className="text-2xl">Componente show</h1>
      <h1 className="text-xl">{text}</h1>
    </div>
  )
}

export default meuPrimeiroComponente
