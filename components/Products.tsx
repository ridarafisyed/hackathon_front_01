import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Products = () => {
  return (
    <section className="container mt-5">
      <p className="text-blue-600 font-extrabold uppercase text-xs tracking-wide text-center">
        Products
      </p>
      <h1 className="font-extrabold text-4xl text-center py-3">
        Checkout What We Have
      </h1>
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="/asserts/product.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <CardTitle>Brushed Raglan Sweatshirt</CardTitle>
            <CardDescription>$195</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="/asserts/product2.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <CardTitle>Cameryn Sash Tie Dress</CardTitle>
            <CardDescription>$545.00</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Avatar>
              <AvatarImage src="/asserts/product1.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <CardTitle>Flex Sweatshirt</CardTitle>
            <CardDescription>$175.00</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default Products
