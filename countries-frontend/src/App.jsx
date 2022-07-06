import { Country } from "./components/Country"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState([])

  const URL_TO_FETCH = "http://localhost:5000/countries"

  const fetchCountries = async () => {
    const response = await fetch(URL_TO_FETCH)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 mt-4 gap-4">
          {data.map((country) => {
            return <Country country={country} />
          })}
        </div>
      </header>
    </div>
  )
}

export default App
