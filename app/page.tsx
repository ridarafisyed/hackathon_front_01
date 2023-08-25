import { getProducts } from "@/sanity/sanity-utils"
import HomePage from "@/views/HomePage"

import { sql } from "@vercel/postgres";

export  async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

export default async function IndexPage() {
  const products = await getProducts()

  return <HomePage products={products} />
}
