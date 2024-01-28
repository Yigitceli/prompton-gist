'use client'

import React, { useState } from 'react'
import PromptChat from '../Components/PromptChat/PromptChat'
import { useAppSelector } from '@/lib/store'

function Prompt() {
  const prompState = useAppSelector(state => state.promptReducer.value)

  const [inputValue, setInputValue] = useState<string>('')

  return (
    <div className='h-full flex flex-col px-20'>
        <div className='flex gap-2 h-full flex-1'>
            <PromptChat inputValue={inputValue} setInputValue={setInputValue} prompt={prompState.ModelAssistant1}/>
            <PromptChat inputValue={inputValue} setInputValue={setInputValue} prompt={prompState.ModelAsssistant2}/>
        </div>
    </div>
  )
}

export default Prompt