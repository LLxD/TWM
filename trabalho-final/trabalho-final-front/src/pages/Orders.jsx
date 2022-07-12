import Template from "./Template"
import Table from "../components/Table"

const Orders = () => {
  const orders = [
    {
      id: 1,
      client: "João",
      product: "Laptop",
      date: "2020-01-01",
      status: "Pendente",
      value: "R$ 1.000,00"
    },
    {
      id: 2,
      client: "Maria",
      product: "Mouse",
      date: "2020-01-01",
      status: "Pendente",
      value: "R$ 100,00"
    }
  ]
  return (
    <Template>
      <h1 className="text-4xl text-white mb-10">Página de Ordens de Serviço</h1>
      <Table orders={orders} />
    </Template>
  )
}

export default Orders
