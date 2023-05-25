import Link from 'next/link'
import path from 'path'
import fs from 'fs/promises'

const events = [
  { id: 'EVENT_1', name: 'Tech' },
  { id: 'EVENT_2', name: 'Energy' },
  { id: 'EVENT_3', name: 'Medicine' }
]
interface HomeProps {
  products: Product[]
}

interface Product {
  id: string,
  name: string,
  price: number
}

function Home(props: HomeProps) {
  return (
    <div>
      {/* <h1>Featured Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul> */}
      <ul>
      {
        props.products.map((product: Product) => {
          return (
            <li key={product.id}>{product.name}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  console.log(123)
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const data =JSON.parse(jsonData)

  return {
    props: data,
    revalidate: 20
  }
}

export default Home