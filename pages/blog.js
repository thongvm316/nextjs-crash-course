import { getSession, useSession } from 'next-auth/client'

function Blog({ data }) {
  const [session] = useSession()
  console.log({ session })

  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log(session)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false,
      },
    }
  }
  // if not login, go to signin api and callback to this page if signin success
  return {
    props: {
      data: 'List of 100 personalized blogs',
      session,
    },
  }
}
