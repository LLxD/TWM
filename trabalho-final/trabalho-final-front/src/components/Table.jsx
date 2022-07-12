import React from "react"

const Table = ({ clients, orders }) => {
  return (
    <div className="mt-20">
      <table className="table w-96">
        {/* head */}
        <thead>
          {orders && (
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>
          )}
          {clients && (
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Ocupação</th>
            </tr>
          )}
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr className="hover" key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.client}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.value}</td>
                </tr>
              )
            })}
          {clients &&
            clients.map((client) => {
              return (
                <tr className="hover" key={client.id}>
                  <th>
                    <img
                      className="h-14"
                      src={client.avatar}
                      alt={client.name}
                    />
                  </th>
                  <td>{client.name}</td>
                  <td>{client.job}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
