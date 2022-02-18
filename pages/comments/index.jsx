import React from 'react'

const CommentsPage = () => {
  const [comments, setComments] = React.useState([])
  const [comment, setComment] = React.useState('')

  const fetchComments = async () => {
    const resp = await fetch('/api/comments')
    const data = await resp.json()

    setComments(data)
  }

  const submitComment = async () => {
    const resp = await fetch('api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    await resp.json()
  }

  const deleteComment = async (commentId) => {
    const resp = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })

    const data = await resp.json()
    console.log(data)

    fetchComments()
  }

  return (
    <div>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            <button onClick={() => deleteComment(item.id)}>
              Delete Comment
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsPage
