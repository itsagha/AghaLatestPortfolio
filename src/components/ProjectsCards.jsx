import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

export default function ProjectsCards({ props }) {
  const cards = [
    {
      id: 1,
      title: "Local Binary Pattern with Maximum Run Length and colors feature",
      field: "Machine Learning",
      desc: "Content-Based Image Retrieval (CBIR) system using color Brodatz images. Extracts features from images using LBP, Maximum Run Length, and color features to find the most similar images among 2.800 Brodatz image patches.",
      imgUrls: ["/projectCBIR1.png", "/projectCBIR2.png", "/projectCBIR3.png"],
    },
    {
      id: 2,
      title: "Soillessmart",
      field: "Software Development",
      desc: "Soillessmart is a Hydroponic Farm education platform made by Mulsa Massive Team that provide many courses about hydroponic farm. Basically, it’s like a bootcamp but we sell a hydroponic courses. To handle the payment gateway, we use Midtrans API to integrate the payment gateway on this website. There are 3 roles in this website, they are users, admin, and teacher. ",
      imgUrls: ["/soillessmart1.png", "/soillessmart2.png", "/soillessmart3.png", "/soillessmart4.png", "/soillessmart5.png"],
    },
    {
      id: 3,
      title: "Learnify",
      field: "Software Development",
      desc: "A website focused on e-learning, where teachers can create materials, assignments for each material, and exams for each material. All students can complete the assignments and exams provided by the teachers and view their scores immediately.",
      imgUrls: ["/learnify1.png", "/learnify2.png", "/learnify3.png", "/learnify4.png", "/learnify5.png", "/learnify6.png"],
    },
    {
      id: 4,
      title: "Shot Spotter",
      field: "Software Development",
      desc: "This simple website was created for the project of web programming and software engineering courses in the 4th semester. I purposely created an easy design to save time in implementation. In this project, I contributed to UI/UX design and Front-end Development. My 2 friends contributed to the back-end development using Laravel.",
      imgUrls: ["/shotspotter1.jpg", "/shotspotter2.jpg", "/shotspotter3.jpg", "/shotspotter4.jpg", "/shotspotter5.jpg"],
    },
    
  ];

  const [previewImg, setPreviewImg] = useState(null);
  // tombol next n prev
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="shadow-xl border border-gray-300 dark:border-gray-700 rounded-2xl p-4 bg-white dark:bg-gray-800 transform transition-all duration-700 hover:scale-101 hover:shadow-[0_0_20px_rgba(250,45,72,0.6)]"
        >
          <h3 className="font-bold mb-2 dark:text-white min-h-10">{card.title}</h3>
          <span className="px-3 py-1 text-sm text-gray-400 rounded-full border border-gray-300 dark:border-gray-700">
            {card.field}
          </span>
          <p className="text-gray-500 dark:text-gray-400 my-4 text-justify min-h-40">{card.desc}</p>

          <div className="relative">
            {/* Prev Button */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent backdrop-blur-sm p-2 rounded-full shadow-md text-primary"
              ref={prevRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                {...props}
              >
                <path
                  fill="currentColor"
                  d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42"
                ></path>
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent backdrop-blur-sm p-2 rounded-full shadow-md text-primary"
              ref={nextRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                {...props}
              >
                <path
                  fill="currentColor"
                  d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
                ></path>
              </svg>
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {card.imgUrls.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${card.title}-${idx}`}
                    className="w-full h-64 md:h-80 object-cover rounded-xl cursor-pointer"
                    onClick={() => setPreviewImg(img)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}

      {/* Modal Preview */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative">
            <img
              src={previewImg}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-justify">And many more!</p>
    </div>
  );
}