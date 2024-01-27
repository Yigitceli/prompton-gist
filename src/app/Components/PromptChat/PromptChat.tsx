import React from 'react'
import Context from './Context'
import Chat from './Chat'

function PromptChat() {
  return (
    <div className='flex-1 justify-center flex flex-col items-center h-full'>
        <Context/>
        <Chat/>
    </div>
  )
}

export default PromptChat