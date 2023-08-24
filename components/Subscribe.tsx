import React from "react"

const Subscribe = () => {
  return (
    <div className="container  flex items-center justify-center hi text-center my-20 py-20 ">
      <div className="hidden xl:block relative -z-1">
        <h1 className=" text-9xl font-semibold z-10 text-gray-100 dark:text-zinc-800">
          Newsletter
        </h1>
      </div>
      <div className="absolute justify-center space-y-5">
        <h1 className="text-3xl font-extrabold">Subscribe Our Newsletter</h1>
        <p className="">Get the latest information and promo offers directly</p>

        <form className="flex items-center  justify-center ">
          <div className="relative items-center justify-center">
            <input
              type="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-800"
              placeholder="Input Email Address"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-900 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
