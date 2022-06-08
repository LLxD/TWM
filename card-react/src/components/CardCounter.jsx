import Button from "./Button"

const CardCounter = ({ setCount }) => {
  return (
    <div className="border-4 rounded p-2 grid gap-5 grid-flow-row items-center justify-center">
      <h1 className="text-xl white text-center p-2">Button Counter Card!</h1>
      <div className="grid grid-flow-col items-center justify-center gap-5">
        <Button onClickFunction={() => setCount((count) => count + 1)}>
          +
        </Button>
        <Button onClickFunction={() => setCount((count) => count - 1)}>
          -
        </Button>
      </div>
    </div>
  )
}

export default CardCounter
