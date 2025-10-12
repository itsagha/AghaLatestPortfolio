import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import SkillsCards from '../components/SkillsCards'
import ProjectsCards from '../components/ProjectsCards'
import ExperiencesCards from '../components/ExperiencesCards'
import Contacts from '../components/Contacts'

export default function Home({ props }) {
  return (
    <div className='bg-white dark:bg-darkBGSec transition-colors duration-700'>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-start min-h-screen max-w-5xl mx-auto px-4 space-y-2"
        >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58L8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4"
            ></path>
            <path
              fill="currentColor"
              d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4"
            ></path>
          </svg>
        </div>
      </section>

      {/* Abput Section */}
      <section id="about" className="py-20 md:py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">About</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Foto profil */}
          <img
            src="FotoProfile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl border-2 border-primary"
            />

          {/* desc */}
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
            What's up! I'm Rasyid Muhammad <span className="text-primary font-bold">Agha</span>, 
            a final year Informatics student at Sebelas Maret University. I’m passionate about crafting 
            clean UI, responsive interfaces and building app experiences that feel intuitive and engaging.
            I’ve built stuff for campus projects, Dicoding challenges, and MSIB programs. and I’m always 
            down to learn something new. <br />
            It started as a small curiosity, and now I just can’t stop designing and building cool stuff.
            Every project taught me something new about how people actually use and feel design.
            Lately, I’ve been exploring Next.js for my upcoming project, fun animations, and cleaner UI vibes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className='py-20 md:py-24 max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">Skills</h2>
        <SkillsCards />
      </section>

      {/* Projects Section */}
      <section id="projects" className='py-20 md:py-24 max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">Projects</h2>
        <ProjectsCards />
      </section>

      {/* Experiences Section */}
      <section id="experience" className='py-20 md:py-24 max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">Experiences</h2>
        <ExperiencesCards />
      </section>

      {/* Contact Section */}
      <section id="contact" className='py-20 md:py-24 max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">Contact</h2>
        <Contacts />
      </section>
    </div>
  )
}