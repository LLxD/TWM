import { Country } from "./components/Country"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState([])
  const [searchString, setSearchString] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const URL_TO_FETCH = "http://localhost:5000/countries"

  const fetchCountries = async () => {
    const response = await fetch(URL_TO_FETCH)
    const data = await response.json()
    setData(data)
    setFilteredData(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const searchCountry = (data) => {
    const filteredData = data.filter((country) => {
      const countryName = country.translations.br || country.name
      return countryName.toLowerCase().includes(searchString.toLowerCase())
    })
    setFilteredData(filteredData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="my-2 p-4 text-black"
          placeholder="Procure por um país!"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value)
            searchCountry(data)
          }}
        ></input>
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 mt-4 gap-4">
          {filteredData.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </div>
      </header>
    </div>
  )
}

export default App
