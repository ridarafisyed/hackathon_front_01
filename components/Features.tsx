import React from "react"
import Image from "next/image"

const Features = () => {
  return (
    <div className="container flex md:flex-none my-20 py-20 bg-slate-50 dark:bg-zinc-900 justify-center">
      <div className="xl:flex hidden relative z-0">
        <div className="hidden xl:block my-5 py-5  z-1">
          <h1 className=" text-8xl font-semibold z-10 text-gray-200 dark:text-zinc-800  text-left">
            Different
            <br /> from <br />
            others
          </h1>
        </div>
        <div className=" hidden xl:block">
          <h1 className="text-8xl font-semibold z-10 text-gray-200 dark:text-zinc-200 top-1/2 text-left">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>

      <div className="xl:absolute container space-x-10 grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1  justify-center items-center">
       
        <div className="space-y-10 ">
          <div className=" space-y-3">
            <h3 className="font-semibold text-lg">
              Using Good Quality Materials
            </h3>
            <p className="">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" space-y-3">
            <h3 className="font-semibold text-lg">Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">100% Handmade Products</h3>
            <p className="">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Discount for Bulk Orders</h3>
            <p className="">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/asserts/feature.png"
            height={300}
            width={300}
            alt="feature image"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold z-10 text-black top-7 text-left">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
          <p>
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <button className="bg-black text-white px-5 py-3 font-semibold text-sm">
            See All Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default Features
