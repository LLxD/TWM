import { useState } from "react"
import { Input } from "./Input"

const Form = () => {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [cep, setCep] = useState("")

  return (
    <form className="grid grid-flow-col lg:grid-flow-row gap-5 text-right">
      <Input value={name} onChangeFunction={setName} label={"Nome: "} />
      <Input value={cep} onChangeFunction={setCep} label={"CEP: "} isCep />
      <Input value={cpf} onChangeFunction={setCpf} label={"CPF: "} isCpf />
    </form>
  )
}

export default Form
