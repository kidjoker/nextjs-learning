import Link from 'next/link'

const events = [
  { id: 'EVENT_1', name: 'Tech' },
  { id: 'EVENT_2', name: 'Energy' },
  { id: 'EVENT_3', name: 'Medicine' }
]

function Home() {
  return (
    <div>
      <h1>Featured Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
