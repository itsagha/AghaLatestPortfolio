import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

function Navbar() {
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
  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <motion.nav
      layout
      initial={false}
      className="max-w-5xl bg-transparent fixed top-0 left-0 right-0 shadow-xl py-2 px-4 z-50 mx-auto md:rounded-2xl md:mt-4 backdrop-blur-sm transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src="/PortoLogo.png" alt="Logo" className="h-12" />

        {/* Tombol toggle mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-700 dark:text-gray-100">
            {isOpen ? (
              <X size={20}/>
            ) : (
              <Menu size={20}/>
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
              className="text-gray-500 border-gray-300 dark:text-gray-300 dark:border-gray-700 cursor-pointer p-2 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-700 flex items-center gap-2"
            >
              {darkMode ? ( <Sun size={16}/> ) : ( <Moon size={16}/>)}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            layout
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <motion.ul
              layout
              className="flex flex-col items-start py-4 px-4 space-y-4 font-semibold text-gray-900 dark:text-gray-100"
            >
              <li><a href="#hero" onClick={toggleMenu}>Hero</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experiences</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>

              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg border text-gray-500 border-gray-300 dark:text-gray-400 dark:border-gray-700 flex items-center gap-2"
                >
                  {darkMode ? <Sun size={16}/> : <Moon size={16}/>}
                </button>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;