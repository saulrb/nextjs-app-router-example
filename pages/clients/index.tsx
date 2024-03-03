import Link from 'next/link'

const ClientsPage = () => {
  const clients = [
    { id: '123', name: 'Saul Rosales' },
    { id: '456', name: 'Jose' }
  ]

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]/[id2]',
                query: { id: 'v1', id2: client.id }
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage

/*
            <Link href={`/clients/v1/${client.id}`}>{client.name}</Link>
*/
