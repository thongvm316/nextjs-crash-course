import React from 'react'
import { useRouter } from 'next/router'

const Events = ({ eventLists }) => {
  const [events, setEvents] = React.useState(eventLists)
  const router = useRouter()

  const fetchSportsEvent = async () => {
    const resp = await fetch('http://localhost:4000/events?category=football')
    const data = await resp.json()
    setEvents(data)

    router.push('/events?category=football', undefined, { shallow: true })
  }

  return (
    <>
      <button onClick={fetchSportsEvent}>Sport Event</button>
      <h1>Lists Events</h1>
      {events.map((item) => {
        return (
          <div key={item.id}>
            {item.desc} | {item.category}
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default Events

export const getServerSideProps = async (context) => {
  const {
    query: { category },
  } = context

  const queryString = category ? 'category=sports' : ''

  const resp = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await resp.json()

  return {
    props: {
      eventLists: data,
    },
  }
}
