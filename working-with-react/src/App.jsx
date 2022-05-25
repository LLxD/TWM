import { useState } from "react"
import logo from "./logo.svg"
import Header from "./components/Header"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header text={"Lucas"} />
        <p>Hello Vite + React + TailwindCSS!</p>
        <h2 className="text-xl text-red-600">{count}</h2>
        <p>
          <button
            className="border-4 bg-white text-black rounded p-2 m-2"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </button>
          <button
            className="border-4 bg-white text-black rounded p-2 m-2"
            type="button"
            onClick={() => setCount((count) => count - 1)}
          >
            -
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
