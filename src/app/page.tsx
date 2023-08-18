"use client"

import { useQuery } from "@tanstack/react-query";

import fakeData from "./data.json"
import Image from "next/image";

import { convertCurrency } from "@/utils/convertCurrency";
import React from "react";

export default function Home() {
  const [subTotal, setSubTotal] = React.useState(2094.97);
  const [hst, setHst] = React.useState(272.3461);
  const [total, setTotal] = React.useState(2382.3161);
  const [estimatedDelivery, setEstimatedDelivery] = React.useState("Nov 24, 2021");

  const dataQuery = useQuery({
    queryKey: ["data"],
    queryFn: () => fakeData
  })

  console.log(dataQuery.data)

  return (
    <main className="min-h-[100dvh] max-w-7xl mx-auto py-2 px-4 md:py-4 xl:px-8 flex flex-col">
      <h1 className="text-4xl font-bold mb-4 md:mb-4 text-blue">
        Your Cart
      </h1>

      <ul className="w-full flex flex-col gap-4 mb-4 md:mb-6">
        {dataQuery.data?.lineItems.map((item) => (
          <li key={item.id} className="flex gap-4 flex-col md:flex-row w-full">
            <Image src={item.image} alt={item.title} width={100} height={100} className="object-contain w-full max-w-[150px] sm:w-[10%]" />

            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
              <div className="flex flex-col gap-4">
                <h4>{item.title}</h4>

                <div className="flex items-center gap-2">
                  <div style={{ backgroundColor: item.swatchColor }} className={`w-5 h-5 rounded-full`} />

                  <span>{item.swatchTitle}</span>
                </div>

              </div>

              <div className="flex flex-col justify-end items-end gap-4 ml-auto">
                <span className="font-bold" title="price">{convertCurrency(item.price)}</span>

                <div className="flex flex-col justify-end items-end gap-4 mt-auto">
                  Estimated Delivery Date: {estimatedDelivery}

                  <button className="btn btn-ghost text-black w-fit btn-sm underline" type="button">
                    Remove
                  </button>
                </div>
              </div>

            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 w-full font-bold">
        <div className="flex justify-between items-center gap-2">
          <span>Subtotal</span>

          <span>{convertCurrency(subTotal)}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>Taxes (estimated)</span>

          <span>{convertCurrency(hst)}</span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <span>Shipping</span>

          <span>Free</span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <span className="text-blue">Total</span>

          <span>{convertCurrency(total)}</span>
        </div>
      </div>
    </main>
  )
}
