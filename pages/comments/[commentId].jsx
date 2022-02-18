import { comments } from '../../../data/comments'

const CommentDetail = ({ comment }) => {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  )
}

export default CommentDetail

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const {
    params: { commentId },
  } = context
  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  console.log(comment)

  return {
    props: {
      comment,
    },
  }
}
