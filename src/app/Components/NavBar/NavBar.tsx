"use client";

import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  return (
    <header className="text-sm md:text-lg py-1 md:py-5 px-3 md:px-20 flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between border-b border-[#293342] items-center">
      <p className="text-mainText font-bold md:text-xl">Prompton Gist</p>
      <div className="flex justify-end flex-1 w-full gap-3 flex-col sm:flex-row">
        <input
          className="bg-secondBg border border-[#293342] py-1 px-3 rounded-sm text-secondaryText w-full sm:w-fit"
          type="search"
          name="gist-search"
          id="gist-search"
          placeholder="Search..."
        />
        <div className="flex justify-between">
          <CategoryButton text="All Gists" onClick={() => router.push("/")} />
          <button
            onClick={() => router.push("/")}
            className="text-secondaryText rounded-sm p-1 px-3"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
