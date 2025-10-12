import React from "react"

const experiences = [
  {
    id: 1,
    title: "Internship at Gaotek Inc.",
    role: "Web Developer Intern",
    duration: "May 2025 - July 2025",
    description: "Developed an online shop using wordpress, and collaborated with the design team."
  },
  {
    id: 2,
    title: "MSIB Batch 6th at Infinite Learning",
    role: "Web Developer Student",
    duration: "September 2024 - December 2024",
    description: "Developed a Hydroponic Farm education platform that provide many courses about hydroponic farm."
  },
  {
    id: 3,
    title: "Student Executive Board (BEM) FATISDA, Sebelas Maret University",
    role: "Staff of the Scientific and Cultural Arts Ministry",
    duration: "February 2024 - December 2024",
    description: "Responsible for 2 work programs. Both are Event Hub and Learning Labs."
  },
  {
    id: 4,
    title: "P!NGFEST",
    role: "General Affair",
    duration: "April 2024 - October 2024",
    description: "Responsible for operational activities during the event, including coordinating with other divisions to handle obstacles that may occur."
  },
  {
    id: 5,
    title: "Student Council of Nurul Fikri Boarding School",
    role: "Secretary",
    duration: "January 2021 - December 2021",
    description: "Participate in the preparation of the student council's annual work program and organize and record minutes of student council monthly meetings."
  },
];

export default function ExperiencesCards() {
  return (
    <div className="max-w-5xl mx-auto">
      
      <div className="relative">
        {/* Vertical dotted line */}
        <div className="absolute left-5 top-0 w-1 h-full border-l-2 border-dotted border-gray-400 dark:border-gray-600"></div>

        <div className="flex flex-col space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="flex items-start relative">
              {/* Circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary dark:border-gray-800 shadow-lg"></div>

              {/* Content */}
              <div className="ml-6">
                <h3 className="font-bold text-xl dark:text-white">{exp.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.role} | {exp.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
