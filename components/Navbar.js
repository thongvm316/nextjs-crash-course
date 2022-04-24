import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar() {
  const [session, loading] = useSession()
  console.log('Navbar', { session, loading })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>

        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signIn('github') // params: github mean, if it appear, user click signIn btn, then can go SignIn directly without go to signIn page. If it not appear, go to SignIn page when user click SignIn button
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
