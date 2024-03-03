import { useRouter } from 'next/router'

const ClientProjectsPage = () => {
  const router = useRouter()

  console.log('Query', router.query)

  const loadProjectHandler = () => {
    //router.replace('/clients/max/projectA')
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }

  console.log(router.query)
  return (
    <>
      <div>
        <h1>The Projects of a Given Client</h1>
        <button onClick={loadProjectHandler}> Load Project A</button>
      </div>
    </>
  )
}

export default ClientProjectsPage
