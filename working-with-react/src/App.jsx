import Header from "./components/Header"
import "./App.css"

import Calculadora from "./components/Calculadora"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          text={
            "Digite o número, clique na operação desejada, insira outro número e aperte no igual!"
          }
        />
        <Calculadora />
      </header>
    </div>
  )
}

export default App
