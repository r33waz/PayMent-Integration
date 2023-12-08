import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello khalti" });
// }

export async function POST(data) {
  const options = {
    method: "POST",
    url: "https://a.khalti.com/api/v2/epayment/initiate/",
    headers: {
      Authorization: "key live_secret_key_68791341fdd94846a146f0457ff7b455",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: data?.amount,
      purchase_order_id: data?.purchase_order_id,
      purchase_order_name: data?.purchase_order_name,
      customer_info: {
        name: data?.customer_name,
        email: data?.customer_email,
        phone: data?.customer_phone,
      },
    }),
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}
