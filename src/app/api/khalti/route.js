
import { NextResponse } from "next/server";

export async function POST(data) {
  const options = {
    method: "POST",
    url: "https://a.khalti.com/api/v2/epayment/initiate/",
    headers: {
      Authorization: "key live_secret_key_68791341fdd94846a146f0457ff7b455",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}
