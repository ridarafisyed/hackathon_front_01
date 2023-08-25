import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  varchar,
    integer,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

 
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const cartTable = pgTable(
  'cart',
  {
    id: serial('id').primaryKey(),
    user_id: varchar('user_id',{
        length:255
    }).notNull(),
    product_id: varchar("porduct_id",{
        length:255
    }).notNull(),
    quantity: integer('quantity').notNull(), 
  }
);
 
// export const getExampleTable = async () => {
//   const selectResult = await db.select().from(ExampleTable);
//   console.log('Results', selectResult);
// };