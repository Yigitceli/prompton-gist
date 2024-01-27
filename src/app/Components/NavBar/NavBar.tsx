import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";

function NavBar() {
  return (
    <header className="py-5 px-20 flex justify-between border-b border-[#293342] items-center">
      <p className="text-mainText font-bold text-xl flex-1">Prompton Gist</p>
      <div className="flex justify-end flex-1 gap-3">
        <input
          className="bg-secondBg border border-[#293342] py-1 px-3 rounded-sm text-secondaryText"
          type="search"
          name="gist-search"
          id="gist-search"
          placeholder="Search..."
        />
        <CategoryButton text="All Gists" />
        <button className="text-secondaryText rounded-sm p-1 px-3">
          Back to Home
        </button>
      </div>
    </header>
  );
}

export default NavBar;
