import { useRouter } from 'next/router'

const SelectedClientProjectPage = () => {
  const router = useRouter()
  console.log('Path:', router.pathname)
  console.log('Query:', router.query)
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  )
}

export default SelectedClientProjectPage
