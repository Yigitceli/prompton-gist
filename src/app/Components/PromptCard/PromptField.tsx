import React from 'react'

interface IProps {
    defaultPrompt: string;
}

function PromptField({defaultPrompt}: IProps) {
  return (
    <input className='bg-thirdBg text-buttonBG px-3 py-1' type="text" name="default-prompt" id="default-prompt" defaultValue={defaultPrompt}/>
  )
}

export default PromptField