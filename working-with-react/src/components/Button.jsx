import React from "react"

const Button = ({
  firstField,
  setSecondField,
  setOperation,
  setFirstField,
  operationSign,
  onClickFunction
}) => {
  return (
    <button
      className="border-4 bg-white text-black rounded p-2 hover:text-red-500 transition-colors"
      type="button"
      onClick={
        onClickFunction === undefined
          ? () => {
              setSecondField(firstField)
              setOperation(true)
              setFirstField(0)
            }
          : onClickFunction
      }
    >
      {operationSign}
    </button>
  )
}

export default Button
