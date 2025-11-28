import React from 'react'

export default function About() {
  return (
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
        down to learn something new. 
        It started as a small curiosity, and now I just can’t stop designing and building cool stuff.
        Every project taught me something new about how people actually use and feel design.
        Lately, I’ve been exploring Next.js for my upcoming project, fun animations, and cleaner UI vibes.
      </p>
  </div>
  )
}
