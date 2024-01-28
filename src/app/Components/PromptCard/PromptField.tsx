import React, { useState } from "react";

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

function PromptField({ value, setValue }: IProps) {
  return (
    <input
      className="bg-thirdBg text-buttonBG px-3 py-1"
      type="text"
      name="default-prompt"
      id="default-prompt"
      defaultValue={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default PromptField;
