import React from "react"

const Input = ({ firstField, setFirstField }) => {
  return (
    <input
      className="text-black mx-2 my-2 text-right rounded p-2"
      placeholder="0"
      value={firstField}
      onChange={(e) => setFirstField(e.target.value)}
    ></input>
  )
}

export default Input
