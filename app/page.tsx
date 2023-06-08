import { getProducts } from "@/sanity/sanity-utils"
import HomePage from "@/views/HomePage"

export default async function IndexPage() {
  const products = await getProducts()

  return <HomePage products={products} />
}
