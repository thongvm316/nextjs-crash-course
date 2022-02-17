import Link from 'next/link'

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of post</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>

          <hr />
        </div>
      ))}
    </>
  )
}

export default PostList

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: {
      posts: data.slice(0, 3),
      //   posts: data,
    },
  }
}
