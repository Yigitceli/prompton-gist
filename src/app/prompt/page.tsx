import React from 'react'
import PromptChat from '../Components/PromptChat/PromptChat'

function Prompt() {
  return (
    <div className='h-full flex flex-col px-20'>
        <div className='flex gap-2 h-full flex-1'>
            <PromptChat/>
            <PromptChat/>
        </div>
    </div>
  )
}

export default Prompt