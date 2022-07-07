import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  } // if fallback: true in return getStaticPaths, this if block is needed for waiting data resp from API and show fallback UI, and at build time will show error if this code is does not exist. So, when we set fallback: 'blocking', no need this code, with this config, It will show UI directly when data response data from an API.

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>

      <p>{post.body}</p>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: true,
  }

  // * If posts grater than 100 and more */
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await res.json()

  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   }
  // })

  // console.log(paths)

  // return {
  //   paths,
  //   fallback: false,
  // }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )
  const data = await res.json()

  if (!data.id) {
    return {
      notFound: true,
    }
  } // use with fallback = true, the page will render fallback comp, then show 404 page

  return {
    props: {
      post: data,
    },
  }
}