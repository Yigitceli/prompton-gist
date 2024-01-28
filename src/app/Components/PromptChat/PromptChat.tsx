import React, { useState } from 'react'
import Context from './Context'
import Chat from './Chat'
import { IModelAssistant } from '@/types'

interface IProps {
  prompt: IModelAssistant,
  inputValue: string,
  setInputValue: (value: string) => void;
}

function PromptChat({prompt, inputValue, setInputValue}: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className='flex-1 justify-center flex flex-col items-center h-full pb-2'>
        <Context prompt={prompt}/>
        <Chat setIsLoading={setIsLoading} prompt={prompt} inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  )
}

export default PromptChat