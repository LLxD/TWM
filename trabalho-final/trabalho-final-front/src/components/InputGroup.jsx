import React from "react"
export function InputGroup({ text, inputType, placeholder }) {
  return (
    <div>
      <label className="input-group w-96">
        <span>{text}</span>
        <input
          type={inputType}
          placeholder={placeholder}
          className="input input-bordered w-96"
        />
      </label>
    </div>
  )
}
