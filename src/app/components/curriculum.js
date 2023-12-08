"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import data from "../../../data.json";
import banner from "../../../public/banner.jpg";
import Image from "next/image";

function Curriculum() {
  return (
    <div className="container mx-auto ">
      <div className="grid text-black lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1">
        <div className="col-span-3">
          <div className="flex flex-col gap-2 mx-10 my-10">
            <h1 className="pl-1 text-6xl font-bold">Course curriculum</h1>
            <p className="pl-3 text-2xl font-semibold">
              7 Modules 1.5 hour daily lecture
            </p>
            <div>
              <div className="w-full pt-5 ">
                <div className="flex flex-col w-full gap-3 p-2 mx-auto rounded-2xl ">
                  {data?.courses.map((i) => {
                    return (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex flex-col justify-between w-full gap-2 px-4 py-2 text-lg font-medium text-left text-black border border-green-600 rounded-md ">
                              <h1 className="text-sm uppercase">{i?.module}</h1>
                              <div className="flex justify-between">
                                <span className="text-xl font-semibold">
                                  {i?.title}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 24 24"
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-8 w-8 text-black`}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 14.379q-.162 0-.298-.053q-.137-.053-.267-.184L7.046 9.754q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16L12 13.292l4.246-4.246q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354l-4.389 4.388q-.13.131-.267.184q-.136.053-.298.053Z"
                                  />
                                </svg>
                              </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col gap-2 px-4 pt-4 pb-2 text-sm text-white">
                              {i?.topics.map((value) => {
                                return (
                                  <>
                                    <ul class="max-w-md space-y-1 text-black list-inside font-bold">
                                      <li class="flex items-center">
                                        <svg
                                          class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        {value}
                                      </li>
                                    </ul>
                                  </>
                                );
                              })}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div class="mx-7 my-14  rounded-lg shadow border-2 border-green-600 h-[736px]">
            <Image src={banner} alt="image" className="h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
