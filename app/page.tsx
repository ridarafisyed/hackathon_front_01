import { client } from "@/sanity/lib/client"
import HomePage from "@/views/HomePage"

export default async function IndexPage() {
  const products = await getData()
  console.log(products)
  return <HomePage products={products} />
}

async function getData() {
  const query =
    "https://lfj9w7v2.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%22product%22%5D%0A"
  const res = await fetch(query)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
