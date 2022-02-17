import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

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

  /* // * If posts grater than 100 and more */
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const data = await res.json()

  //   const paths = data.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     }
  //   })

  //   return {
  //     paths,
  //     fallback: false,
  //   }
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
