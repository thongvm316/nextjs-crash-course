import React from 'react'

const Dashboard = () => {
  const [loading, setLoading] = React.useState(true)
  const [dashboardData, setDashboardData] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:4000/dashboard')
      const data = await res.json()

      setDashboardData(data)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2>Dashboard</h2>
          <h2>Posts - {dashboardData.posts}</h2>
        </>
      )}
    </>
  )
}

export default Dashboard
