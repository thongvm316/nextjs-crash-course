import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Ooooopppp...</h1>
      <p>This page could not be found.</p>
      <p>
        Go back to <Link href='/'>home page</Link>
      </p>
    </div>
  )
}

export default NotFound
