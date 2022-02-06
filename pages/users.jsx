import User from '../components/user'

const UserList = ({ users }) => {
  return (
    <>
      <h1>List Of User</h1>

      {users.map((user) => (
        <div key={user.id}>
          {/* <p>{user.name}</p> 
          <p>{user.email}</p> */}

          {/* Use User.jsx component */}
          <User user={user} />
        </div>
      ))}
    </>
  )
}

export default UserList

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}
