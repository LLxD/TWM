import React from "react"
export function Country({ country }) {
  return (
    <div className="border hover:bg-white hover:text-black transition-colors rounded gap-4 w-64 grid items-center justify-center grid-flow-row">
      <h1>
        {country.id} - {country.name}
      </h1>
      <h4 className="text-4xl">{country.emoji}</h4>
      <h2>
        Capital: {country.capital !== "" ? country.capital : "Não tem :("}
      </h2>
    </div>
  )
}
