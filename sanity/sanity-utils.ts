import { groq } from "next-sanity"

import { Product } from "@/types/product"

import { client } from "./lib/client"

export async function getProducts(): Promise<Product[]> {
  return client.fetch(groq`*[_type == "product"]{
    name,
    details,
    "image": image[0].asset->url,
    price,
    "slug": slug.current,
    quantity,
    _createdAt
  }`)
}

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
    name,
    details,
    "image": image[0].asset->url,
    price,
    "slug": slug.current,
    quantity,
    _createdAt
  }`,
    {
      slug,
    }
  )
}
export async function getGenderProducts(gender: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && gender == $gender]{
    name,
    details,
    "image": image[0].asset->url,
    price,
    gender,
    "slug": slug.current,
    quantity,
    _createdAt
  }`,
    {
      gender,
    }
  )
}
