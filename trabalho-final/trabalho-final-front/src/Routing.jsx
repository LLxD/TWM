import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Clients from "./pages/Clients"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Technicians from "./pages/Technicians"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="clients" element={<Clients />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
      <Route path="technicians" element={<Technicians />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
