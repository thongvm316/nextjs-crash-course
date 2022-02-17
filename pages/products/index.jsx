import Link from 'next/link'

const PostList = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.id} {product.title} {product.price}
          </h2>

          <hr />
        </div>
      ))}
    </>
  )
}

export default PostList

export const getStaticProps = async () => {
  console.log('Generating, Re Generrating ProductList')
  const res = await fetch('http://localhost:4000/products')
  const data = await res.json()

  console.log(data)

  return {
    props: {
      products: data,
      revalidate: 10,
    },
  }
}
