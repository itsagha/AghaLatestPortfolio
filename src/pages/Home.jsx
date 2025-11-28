import React from 'react'
import SkillsCards from '../components/SkillsCards'
import ProjectsCards from '../components/ProjectsCards'
import ExperiencesCards from '../components/ExperiencesCards'
import Contacts from '../components/Contacts'
import About from '../components/About'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-white dark:bg-darkBGSec transition-colors duration-700'>
      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-start min-h-screen max-w-5xl mx-auto px-4 space-y-2">
        <Hero />
      </section>

      {/* Abput Section */}
      <section id="about" className="py-20 md:py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left text-gray-900 dark:text-white">About</h2>
        <About />
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