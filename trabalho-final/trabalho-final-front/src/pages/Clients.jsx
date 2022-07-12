import Table from "../components/Table"
import Template from "./Template"
import Form from "../components/Form"

const Clients = () => {
  const clients = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "João",
      job: "Developer"
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Maria",
      job: "Designer"
    }
  ]
  return (
    <Template>
      <Form />
      <Table clients={clients} />
    </Template>
  )
}

export default Clients
