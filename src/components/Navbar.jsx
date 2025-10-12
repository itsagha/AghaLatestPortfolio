import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ props }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Animasi menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="max-w-5xl bg-transparent fixed top-0 left-0 right-0 shadow-xl py-2 px-4 z-50 mx-auto md:rounded-2xl md:mt-4 backdrop-blur-sm transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/PortoLogo.png" alt="Logo" className="h-12" />

        {/* Tombol toggle mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-700 dark:text-gray-100">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                {...props}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="1.5em"
                height="1.5em"
                {...props}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M7.95 11.95h32m-32 12h32m-32 12h32"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-900 dark:text-gray-100 items-center">
          <li><a href="#hero" className="underline-hover transition">Hero</a></li>
          <li><a href="#about" className="underline-hover transition">About</a></li>
          <li><a href="#skills" className="underline-hover transition">Skills</a></li>
          <li><a href="#projects" className="underline-hover transition">Projects</a></li>
          <li><a href="#experience" className="underline-hover transition">Experiences</a></li>
          <li><a href="#contact" className="underline-hover transition">Contact</a></li>

          {/* Tombol dark mode */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-700 flex items-center gap-2"
            >
              {darkMode ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    {...props}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5V3m0 18v-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="text-gray-500"
                    {...props}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.182 14.86A9.474 9.474 0 1 1 9.139 2.819a1.053 1.053 0 0 1 1.38 1.295a7.7 7.7 0 0 0-.085 4.642a7 7 0 0 0 4.81 4.811c1.52.45 3.14.42 4.643-.084a1.053 1.053 0 0 1 1.295 1.379"
                    ></path>
                  </svg>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mt-2 rounded-xl overflow-hidden"
          >
            <ul className="flex flex-col items-start py-4 px-4 space-y-4 font-semibold text-gray-900 dark:text-gray-100">
              <li><a href="#hero" onClick={toggleMenu} className="transition">Hero</a></li>
              <li><a href="#about" onClick={toggleMenu} className="transition">About</a></li>
              <li><a href="#skills" onClick={toggleMenu} className="transition">Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="transition">Projects</a></li>
              <li><a href="#experience" onClick={toggleMenu} className="transition">Experience</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="transition">Contact</a></li>

              {/* Dark mode toggle mobile */}
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-700 flex items-center gap-2"
                >
                  {darkMode ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        {...props}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5V3m0 18v-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        className="text-gray-500"
                        {...props}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M21.182 14.86A9.474 9.474 0 1 1 9.139 2.819a1.053 1.053 0 0 1 1.38 1.295a7.7 7.7 0 0 0-.085 4.642a7 7 0 0 0 4.81 4.811c1.52.45 3.14.42 4.643-.084a1.053 1.053 0 0 1 1.295 1.379"
                        ></path>
                      </svg>
                    </>
                  )}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
