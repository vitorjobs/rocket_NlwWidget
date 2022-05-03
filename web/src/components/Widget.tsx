import {ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { useState } from 'react'

export function Widget () {

  // const [isWidgetOpen, setIsWidgetOpen ] = useState(false)

  // function toggleWidgetVisibility(){
  //   setIsWidgetOpen(!isWidgetOpen)
  // }

  return (
    <Popover className='absolute bottom-5 right-5'>
      <Popover.Panel>Olá Programador</Popover.Panel> 
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6'/>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
          <span className='pl-2'> </span>
            Feedback
          </span>
      </Popover.Button>
    </Popover>
  )
}