import React from "react";

interface IProps {
  text: string;
}

function CategoryButton({ text }: IProps) {
  return (
    <button className="text-mainText bg-buttonBG rounded-sm py-1.5 px-4 font-semibold text-md">
      {text}
    </button>
  );
}

export default CategoryButton;
