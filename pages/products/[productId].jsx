import { useRouter } from 'next/router'

const Product = ({ product }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>

      <p>{product.description}</p>
    </div>
  )
}

export default Product

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  console.log(`Regenerating ${params.productId}`)
  const res = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await res.json()

  return {
    props: {
      product: data,
      revalidate: 10,
    },
  }
}
