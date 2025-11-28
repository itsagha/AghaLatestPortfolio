import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <h1 className="max-w-80 md:max-w-5xl text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
        <Typewriter
          words={['console.log("Front-End Developer");']}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
          />
      </h1>

      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
        Turning ideas into elegant, functional interfaces.
      </p>

      <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
        scrollDown(); // more coming up
        <ChevronDown size={16}/>
      </div>

      {/* button hire & download */}
      <div className="flex gap-4 mt-4">
        <a
          href="#contact"
          className="
            relative px-5 py-2 rounded-xl bg-primary text-white text-sm md:text-base
            shadow-md transition-all duration-500
           hover:shadow-primary/40 hover:shadow-lg
          "
        >
          Hire Me
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1pCBIQMTnvAdkOFra-aNo_NEK3p4oRIVx/view?usp=sharing"
          className="relative px-5 py-2 rounded-xl text-primary text-sm md:text-base
                    transition-all duration-500 shadow-[0_0_10px] shadow-primary/40
                    hover:shadow-[0_0_25px_4px] hover:shadow-primary/70 hover:bg-primary/5"
        >
          Download CV
        </a>
      </div>
    </>
  )
}
