import { Link } from "react-router-dom"

const Template = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Começar
        </label>
        <div className="grid grid-flow-col col-span-2 gap-40  items-center justify-center">
          {children}
        </div>
      </div>
      <div className="drawer-side h-screen">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
          <li>
            <Link to="/orders">Ordens de Serviço</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/technicians">Técnicos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Template
