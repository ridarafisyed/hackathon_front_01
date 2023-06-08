import React from "react"
import Image from "next/image"
import Link from "next/link"

const Promotions = () => {
  return (
    <section className="container mt-5 mb-5">
      <p className="text-blue-600  dark:text-blue-400 font-extrabold uppercase text-xs tracking-wide text-center">
        Promotions
      </p>
      <h1 className="font-extrabold text-4xl text-center py-3">
        Our Promotions Events
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 gap-3">
          <div className=" bg-gray-300 dark:bg-gray-800 mb-4 flex">
            <div className="p-14">
              <h1 className="font-extrabold text-2xl">
                GET UP TO <span className="text-3xl">60%</span>
              </h1>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image
              src="/asserts/event1.png"
              height={150}
              width={300}
              alt="event one"
            />
          </div>

          <div className="bg-zinc-900 text-white text-center px-8 py-10">
            <h1 className="font-extrabold text-5xl mb-2 ">GET 30% off </h1>
            <p className=" text-md uppercase my-2">Use promo code</p>
            <Link
              href="/"
              className="text-md uppercase mt-2 bg-zinc-700 rounded-md px-4 py-1  "
            >
              DINEWEEKENDSALE
            </Link>
          </div>
        </div>
        <div className="bg-orange-100 dark:bg-orange-700 pt-5 pl-5">
          <h1>Flex Sweatshirt</h1>
          <p className="font-extrabold">
            <span className="line-through font-light">$100.00 </span>$75.00
          </p>
          <Image
            src="/asserts/event2.png"
            height={150}
            width={300}
            alt="event one"
          />
        </div>
        <div className="bg-gray-300 text-black pt-5 pl-5">
          <h1>Flex Push Button Bomber</h1>
          <p className="font-extrabold">
            <span className="line-through font-light">$225.00 </span>$190.00
          </p>
          <Image
            src="/asserts/event3.png"
            height={350}
            width={300}
            alt="event one"
            className="b-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Promotions
