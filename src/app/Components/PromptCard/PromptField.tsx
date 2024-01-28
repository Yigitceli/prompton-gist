import React, { useState } from "react";

interface IProps {
  defaultPrompt: string;
}

function PromptField({ defaultPrompt }: IProps) {
  const [value, setValue] = useState<string>(defaultPrompt)
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
