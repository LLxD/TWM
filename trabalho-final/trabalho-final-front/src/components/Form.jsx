import { InputGroup } from "./InputGroup"
import { Button } from "./Button"
import React from "react"

const Form = () => {
  return (
    <div className="form-control grid gap-4 max-h-96">
      <InputGroup
        text="Nome"
        placeholder="Lucas Lima do Nascimento"
        inputType="text"
      />
      <InputGroup text="Email" placeholder="info@site.com" inputType="text" />

      <Button />
    </div>
  )
}

export default Form
