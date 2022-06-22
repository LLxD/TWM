import { Navbar } from "./components/Navbar"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import StarWarsCategory from "./pages/StarWarsCategory"
import darth_maul from "./img/siths/darth_maul.jpg"
import palpatine from "./img/siths/palpatine.jpg"
import vader from "./img/siths/vader.jpg"
import luke from "./img/jedis/luke.jpg"
import obiwan from "./img/jedis/obi-wan.jpg"
import yoda from "./img/jedis/yoda.jpg"
import b1droids from "./img/droids/b1-droids.jpg"
import bb8 from "./img/droids/bb8.jpg"
import r2d2 from "./img/droids/r2d2.jpg"

function App() {
  return (
    <>
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="siths"
            element={
              <StarWarsCategory images={[darth_maul, palpatine, vader]} />
            }
          />
          <Route
            path="droids"
            element={<StarWarsCategory images={[b1droids, bb8, r2d2]} />}
          />
          <Route
            path="jedis"
            element={<StarWarsCategory images={[luke, obiwan, yoda]} />}
          />
        </Routes>
      </header>
    </>
  )
}

export default App
