import Link from 'next/link'
export const getStaticProps = async () => {
  console.log('getStaticProps')

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }) => {
  console.log('Ninjas component')
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninjas
