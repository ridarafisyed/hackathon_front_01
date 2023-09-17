"use client";
import getStipePromise from "@/lib/stripe";
import { RootState } from "@/store/store"

import { useSelector, useDispatch } from "react-redux"



const StripeCheckOutButton = () => {
  const products = useSelector((state:RootState) => state.cart.items);
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
      <button
        className="bg-green-500 py-3 px-3 rounded-md"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;