import React from 'react'
import { FlipWords } from './ui/flip-words'
import Dash from './buttons/dash';

const About = () => {
    const words = ["Focused", "Uninterrupted", "Pragmaticly", "Committed","Attentive","Disciplined"];
  return (
    <div className='flex flex-col items-center'>
      <div className="h-[10rem] flex justify-between items-center px-4 w-full">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Learn
          <FlipWords words={words} /> <br />
          with <span className='font-bold'>कर्मOS</span>
        </div>
        <div className="ml-auto">
          <Dash />
        </div>
        
      </div>
      <div className='flex flex-col items-left text-left mr-auto px-5 font-semibold max-w-xl'>
      KarmOS provides a distraction-free environment, free from Brainrots, advertisements and attention-grabbing bots. Focus solely on learning with uninterrupted access to lectures, tutorials, and documentation.

      </div>
      <br />
      <div className='flex flex-col items-left text-left mr-auto px-5 font-semibold max-w-xl'>Made With 💚<br /><span className=" text-green-300 pb-5">
          <a href="/dashboard/tuts/sbali" rel="noopener noreferrer" className="underline">KintsugiDevStudios</a>
          </span></div>
    </div>
  )
}

export default About
