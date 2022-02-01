import { useRouter } from 'next/router'

const ProductDetail = () => {
  const route = useRouter()
  const productId = route.query.productId

  return <h1>Product Detail {productId}</h1>
}

export default ProductDetail

// * can use this file instead [productId].jsx
