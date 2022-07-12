import ReactDOM from "react-dom/client"
import Routing from "./Routing"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
)
