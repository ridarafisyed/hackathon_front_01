"use client "

import React from "react"
import Link from "next/link"
import { FacebookIcon } from "lucide-react"

import { siteConfig } from "@/config/site"

const SocialMediaIcon = () => {
  return (
    <div className="flex m-5 mt-5 gap-5">
      <Link href="" className="bg-zinc-200 rounded-md p-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </Link>
      <Link href="" className="bg-zinc-200 rounded-md p-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
      <Link href="" className="bg-zinc-200 rounded-md p-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          stroke-width="0"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      </Link>
    </div>
  )
}

const UpperFooter = () => {
  return (
    <div className="grid grid-cols-5 gap-5  p-5 mb-20 text-md">
      <div className="col-span-2">
        <Link href="/" className="flex items-center space-x-2 ml-5  mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="inline-block text-2xl font-extrabold">
            {siteConfig.name}
          </span>
        </Link>
        <p className="max-w-[400px] ml-5">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <SocialMediaIcon />
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Company
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Terms of Use</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">How it Works</Link>
          </li>
          <li>
            <Link href="">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Support
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">Support Carrer</Link>
          </li>
          <li>
            <Link href="">24h Service</Link>
          </li>
          <li>
            <Link href="">Quick Chat</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1 className="text-zinc-600 font-extrabold text-lg tracking-wide">
          {" "}
          Contact
        </h1>
        <ul className="space-y-3">
          <li>
            <Link href="">Whatsapp</Link>
          </li>
          <li>
            <Link href="">Support 24h</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const LowerFooter = () => {
  return (
    <div className="grid grid-cols-3 gap-5 px-10 py-10 text-md">
      <p className="">Copyright c 2023 Dine Market</p>
      <p>
        Design by. <span className="font-bold">Weird Design Studio</span>
      </p>
      <p>
        Code by. <span className="font-bold"> ridarafisyed on github</span>
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div className="container">
      <UpperFooter />
      <hr />
      <LowerFooter />
    </div>
  )
}

export default Footer
