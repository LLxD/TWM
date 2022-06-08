import "./App.css"
import CardCounter from "./components/CardCounter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl text-red-500">{count}</h1>
        <div className="grid lg:grid-flow-col gap-5 mt-4">
          <CardCounter setCount={setCount} />
          <CardCounter setCount={setCount} />
          <CardCounter setCount={setCount} />
        </div>
      </header>
    </div>
  )
}

export default App
