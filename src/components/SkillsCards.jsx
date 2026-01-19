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
    { id: 12, title: "Google Colab", imgUrl: "/colab_skills.svg" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="p-4 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700 transform transition-all duration-700 hover:scale-101 hover:shadow-[0_0_20px_rgba(250,45,72,0.6)]"
        >
          <img
            src={card.imgUrl}
            alt={card.title}
            className="w-full h-auto object-contain"
          />
          <p className="text-center text-sm md:text-base mt-2 dark:text-white text-gray-500">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );
}
