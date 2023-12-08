import Image from "next/image";
import React from "react";
import instructor from "../../../public/instructor.png";
import Link from "next/link";
import idpn_logo from "../../../public/logo.jpg";
import Paymnet from "./steps/payment";

function MainSection() {
  return (
    <><div className="flex flex-col min-h-screen text-white ">
      <header className="flex items-center justify-between mx-20 my-3">
        <div>
          <Image
            src={idpn_logo}
            alt="img"
            width={50}
            height={50}
            className="rounded-full" />{" "}
        </div>
        <div></div>
        <div></div>
      </header>
      <div className="grid items-center flex-grow px-20 lg:grid-cols-2 md:grid-cols-2 sm:gris-cols-1">
        <div>
          <h1 className="flex flex-col gap-2 mb-4 text-6xl font-bold text-black">
            READING AND UNDERSTANDING <bg></bg>
            <span className="p-1 text-5xl text-white bg-green-600">
              FINANCIAL STATEMENTS{" "}
            </span>
            <br></br>
            <span className="w-1/2 p-1 text-white bg-red-600 mt-1text-5xl">
              LIKE A PRO
            </span>
          </h1>

          <div className="flex flex-wrap gap-5 ">
            <div className="flex flex-col gap-3 p-3 mb-8 bg-green-600 border-2 border-green-600 rounded-lg shadow w-fit">
              <p>
                START DATE : <strong>3rd DECEMBER</strong>
              </p>
              <p>
                DURATION :<strong>6-7 DAYS</strong>
              </p>
              <p>
                INCESTMENT :<strong>RS 1500</strong>
              </p>
              <p>
                TIME : <strong>7:00PM TO 8:30PM</strong>
              </p>
              <p>
                TUTOR : <strong>AAYUSH NEUPANE</strong>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex items-center ">
                <div className="px-3 py-1 mr-4 text-white bg-green-600 rounded">
                  <p>
                    PRICE : <strong>RS 1500</strong>
                  </p>
                </div>
              </div>
              <Link href="/form" className="p-2 text-xl font-medium text-center bg-red-600 rounded-md w-96 hover:bg-red-700">
                Register Today
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            alt="Instructor"
            className="h-full "
            height=""
            src={instructor}
            style={{
              aspectRatio: "800/800",
              objectFit: "contain",
            }}
            width="650" />
        </div>
      </div>

    </div><Paymnet /></>
  );
}
export default MainSection;
