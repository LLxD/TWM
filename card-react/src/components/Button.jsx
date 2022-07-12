const Button = ({ onClickFunction, children }) => {
  return (
    <button
      className="border-4 bg-white text-black rounded p-2 hover:text-red-500 hover:border-red-500 transition-colors w-20"
      type="button"
      onClick={onClickFunction}
    >
      {children}
    </button>
  )
}

export default Button
