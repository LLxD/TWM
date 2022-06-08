import { useState, useEffect } from "react"
import Input from "./Input"
import Button from "./Button"

const Calculadora = () => {
  const [result, setResult] = useState(0)
  const [firstField, setFirstField] = useState(0)
  const [secondField, setSecondField] = useState(0)
  const [isSum, setIsSum] = useState(false)
  const [isSubtraction, setIsSubtraction] = useState(false)
  const [isMultiplication, setIsMultiplication] = useState(false)
  const [isDivision, setIsDivision] = useState(false)

  useEffect(() => {
    setResult(Number(result).toFixed(2))
    setFirstField(result)
  }, [result])

  return (
    <div className="border-4 p-4 rounded m-4">
      <Input firstField={firstField} setFirstField={setFirstField} />
      <div className="grid grid-flow-row grid-cols-2 m-2 gap-2">
        <Button
          setSecondField={setSecondField}
          firstField={firstField}
          setOperation={setIsSum}
          setFirstField={setFirstField}
          operationSign={"+"}
        />
        <Button
          setSecondField={setSecondField}
          firstField={firstField}
          setOperation={setIsSubtraction}
          setFirstField={setFirstField}
          operationSign={"-"}
        />
        <Button
          setSecondField={setSecondField}
          firstField={firstField}
          setOperation={setIsMultiplication}
          setFirstField={setFirstField}
          operationSign={"×"}
        />
        <Button
          setSecondField={setSecondField}
          firstField={firstField}
          setOperation={setIsDivision}
          setFirstField={setFirstField}
          operationSign={"÷"}
        />
        <Button onClickFunction={() => setResult(0)} operationSign={"CLEAR"} />
        <Button
          onClickFunction={() => {
            if (isSum) {
              setResult(Number(firstField) + Number(secondField))
            } else if (isSubtraction) {
              setResult(Number(secondField) - Number(firstField))
            } else if (isMultiplication) {
              setResult(Number(firstField) * Number(secondField))
            } else if (isDivision) {
              setResult(Number(secondField) / Number(firstField))
            } else {
              setFirstField(0)
            }
            setIsSum(false)
            setIsSubtraction(false)
            setIsMultiplication(false)
            setIsDivision(false)
          }}
          operationSign={"="}
        />
      </div>
    </div>
  )
}

export default Calculadora
