import Marquee from "react-fast-marquee"

export default function SkillsCards() {
  const cards = [
    { id: 1, title: "React", imgUrl: "/react_skills.png" },
    { id: 2, title: "NextJS", imgUrl: "/nextjs_skills.png" },
    { id: 3, title: "Git", imgUrl: "/git_skills.png" },
    { id: 4, title: "Figma", imgUrl: "/figma_skills.png" },
    { id: 5, title: "Shadcn", imgUrl: "/shadcn_skills.png" },
    { id: 6, title: "TailwindCSS", imgUrl: "/tailwind_skills.png" },
    { id: 7, title: "JavaScript", imgUrl: "/js_skills.png" },
    { id: 8, title: "Python", imgUrl: "/python_skills.png" },
    { id: 9, title: "Wordpress", imgUrl: "/wordpress_skills.png" },
    { id: 10, title: "PHP", imgUrl: "/php_skills.png" },
    { id: 11, title: "TypeScript", imgUrl: "/ts_skills.png" },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white">
      <Marquee
        pauseOnHover
        speed={55}
        gradient={true}
        gradientWidth={100}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center p-4 w-32 md:w-40 lg:w-48 mx-4"
          >
            <img
              src={card.imgUrl}
              alt={card.title}
              className="w-full h-auto object-contain"
            />
            <p className="text-center text-sm md:text-base mt-2 text-gray-500">
              {card.title}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
