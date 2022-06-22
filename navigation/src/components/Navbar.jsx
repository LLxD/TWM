import React from "react"
import { Link } from "react-router-dom"

export function Navbar({}) {
  return (
    <div className="grid grid-flow-row mx-auto gap-10 h-screen w-80 float-left items-center text-center text-3xl bg-transparent">
      <Link to="/">Home</Link>
      <Link to="siths">Siths</Link>
      <Link to="droids">Droids</Link>
      <Link to="jedis">Jedis</Link>
    </div>
  )
}
