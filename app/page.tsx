import { getProducts } from "@/sanity/sanity-utils"
import HomePage from "@/views/HomePage"

import { sql } from "@vercel/postgres";

export default async function IndexPage() {
  const products = await getProducts()

  return <HomePage products={products} />
}
