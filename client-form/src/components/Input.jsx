import InputMask from "react-input-mask"

export function Input({ label, onChangeFunction, value, isCpf, isCep }) {
  let mask = ""
  if (isCpf) {
    mask = "999-999-999.99"
  } else if (isCep) {
    mask = "99999-999"
  }

  return (
    <div>
      <label className="p-4">{label}</label>
      <InputMask
        className="text-black px-2"
        mask={mask}
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
      />
    </div>
  )
}
