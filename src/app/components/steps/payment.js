"use client";
import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import esewa from "../../../../public/esewa.png";
import khalti from "../../../../public/khalti.png";
import connect_ips from "../../../../public/connectips-icon.png";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import khalti_data from "../../../../khalti.json";
import { POST } from "@/app/api/khalti/route";

function Paymnet() {
  const [uuid, setUuid] = useState("");
  var dataString ="total_amount,transaction_uuid,product_code";
  var secretKey = "8gBm/:&EnhH.1/q";
  var hash = CryptoJS.HmacSHA256(dataString, secretKey);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  console.log("HMAC-SHA256 hash result with secret key:", hashInBase64);

  const handeSubmit = async () => {
    const data = {
      amount: khalti_data?.amount,
      purchase_order_id: uuid,
      purchase_order_name: khalti_data?.purchase_order_name,
      customer_name: khalti_data?.customer_info.name,
      customer_email: khalti_data?.customer_info.email,
      customer_phone: khalti_data?.customer_info.phone,
    };
    console.log(JSON.stringify(data));
    const res = await POST("http://localhost:3000/api/khalti", data);
    const result = await res.json();
    console.log(result);
  };

  useEffect(() => {
    setUuid(uuidv4());
  }, []);
  console.log(uuid);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-16">
      <div className="p-5 border rounded-md shadow-md">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-2xl font-bold">Paymant Method</h1>
          <span className="text-sm">Choose payment method to procees</span>
        </div>
        <Tab.Group>
          <Tab.List className="flex flex-wrap p-1 space-x-1 cursor-pointer rounded-xl">
            <Tab as={Fragment}>
              {({ selected }) => (
                <Image
                  src={esewa}
                  alt="esewa"
                  width={150}
                  height={100}
                  className={
                    selected
                      ? "border-2 border-green-600 text-white outline-none rounded-md p-2"
                      : "bg-white text-black shadow-md rounded-md p-2"
                  }
                />
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Image
                  src={khalti}
                  alt="esewa"
                  width={150}
                  height={100}
                  className={
                    selected
                      ? "border-2 border-green-600 text-white outline-none rounded-md p-2"
                      : "bg-white text-black shadow-md rounded-md p-2"
                  }
                />
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Image
                  src={connect_ips}
                  alt="esewa"
                  width={150}
                  height={100}
                  className={
                    selected
                      ? "border-2 border-green-600 text-white outline-none rounded-md p-2"
                      : "bg-white text-black shadow-md rounded-md p-2"
                  }
                />
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mt-5 text-center">
                <form
                  action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                  method="POST"
                >
                  <input
                    type="hidden"
                    id="amount"
                    name="amount"
                    value="100"
                    required
                  />
                  <input
                    type="hidden"
                    id="tax_amount"
                    name="tax_amount"
                    value="10"
                    required
                  />
                  <input
                    type="hidden"
                    id="total_amount"
                    name="total_amount"
                    value="110"
                    required
                  />
                  <input
                    type="hidden"
                    id="transaction_uuid"
                    name="transaction_uuid"
                    required
                    value={uuid}
                  />
                  <input
                    type="hidden"
                    id="product_code"
                    name="product_code"
                    value="EPAYTEST"
                    required
                  />
                  <input
                    type="hidden"
                    id="product_service_charge"
                    name="product_service_charge"
                    value="0"
                    required
                  />
                  <input
                    type="hidden"
                    id="product_delivery_charge"
                    name="product_delivery_charge"
                    value="0"
                    required
                  />
                  <input
                    type="hidden"
                    id="success_url"
                    name="success_url"
                    value="http://localhost:3000/"
                    required
                  />
                  <input
                    type="hidden"
                    id="failure_url"
                    name="failure_url"
                    value="http://localhost:3000/"
                    required
                  />
                  <input
                    type="hidden"
                    id="signed_field_names"
                    name="signed_field_names"
                    value="total_amount,transaction_uuid,product_code"
                    required
                  />
                  <input
                    type="hidden"
                    id="signature"
                    name="signature"
                    required
                    value={hashInBase64}
                  />
                  <button
                    value="Submit"
                    type="submit"
                    className="p-2 text-white bg-green-600 rounded-lg"
                  >
                    Continue with eSewa
                  </button>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex justify-around mt-2">
                <button
                  value="Submit"
                  onClick={handeSubmit}
                  className="p-2 text-white bg-green-600 rounded-lg w-fit"
                >
                  Continue with khalti
                </button>
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Paymnet;
