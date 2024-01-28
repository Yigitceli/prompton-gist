import React from "react";

interface IProps {
  text: string;
  onClick?: () => void;
}

function CategoryButton({ text, onClick }: IProps) {
  return (
    <button onClick={onClick} className="text-mainText bg-buttonBG rounded-sm py-1.5 px-4 font-semibold text-md">
      {text}
    </button>
  );
}

export default CategoryButton;
