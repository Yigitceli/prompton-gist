import React from 'react'
import PromptChat from '../Components/PromptChat/PromptChat'

function Prompt() {
  return (
    <div className='p-2 h-full flex flex-col'>
        <p className='text-white mb-8'>Find 10 Most Popular Milk Chocolate brands in california</p>
        <div className='flex gap-2 h-full flex-1'>
            <PromptChat/>
            <PromptChat/>
        </div>
    </div>
  )
}

export default Prompt