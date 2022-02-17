import React from 'react'
import useSWR from 'swr'

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard')
  const data = await res.json()

  return data
}

const DashBoardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher)

  if (error) return 'Error Occur'
  return (
    <>
      {!data ? (
        'Loading...'
      ) : (
        <>
          <h2>Dashboard</h2>
          <h2>Posts - {data.posts}</h2>
        </>
      )}
    </>
  )
}

export default DashBoardSWR
