import logo from "./logo.svg"
import "./App.css"
import CardCounter from "./components/CardCounter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <div className="grid grid-flow-col gap-5 mt-4">
          <CardCounter setCount={setCount} />
          <CardCounter setCount={setCount} />
          <CardCounter setCount={setCount} />
        </div>
      </header>
    </div>
  )
}

export default App
