import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

// Assuming you have two distinct logos for light and dark backgrounds
import logo from "../../assets/logo.png"; // Your standard color logo
// For the best result, create a white version of your logo and link it here
import logoWhite from "../../assets/logo.png"; 

// Animated Hamburger/Close Icon Component
const MenuToggle = ({ toggle, scrolled, open }) => {
  const strokeColor = open ? "white" : scrolled ? "black" : "white";
  return (
    <button
      onClick={toggle}
      className="md:hidden focus:outline-none z-50 relative w-8 h-8"
      aria-label="Toggle menu"
    >
      <motion.div
        animate={open ? "open" : "closed"}
        initial={false}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <motion.span
          variants={{
            closed: { y: 0, rotate: 0 },
            open: { y: 6, rotate: 45 },
          }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5"
          style={{ background: strokeColor }}
        ></motion.span>
        <motion.span
          variants={{
            closed: { opacity: 1, transition: { delay: 0.2 } },
            open: { opacity: 0 },
          }}
          className="block w-6 h-0.5 my-1.5"
          style={{ background: strokeColor }}
        ></motion.span>
        <motion.span
          variants={{
            closed: { y: 0, rotate: 0 },
            open: { y: -6, rotate: -45 },
          }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5"
          style={{ background: strokeColor }}
        ></motion.span>
      </motion.div>
    </button>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownTimeoutRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // --- HOOKS ---
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && open) setOpen(false);
    };
    checkMobile();

    const handleResize = () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(checkMobile, 150);
    };
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  // --- EVENT HANDLERS ---
  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // --- DATA & VARIANTS ---
  const textColorStyle = scrolled ? { color: "rgba(0,0,0,0.9)" } : { color: "white" };

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const mobileLinkContainerVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const mobileLinkVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  const services = [
    {
      title: "Software Development",
      path: "/Services/Development",
      subItems: [
        { title: "Website Development", path: "/Services/Development/Website" },
        { title: "Web Application Development", path: "/Services/Development/Web-App" },
        { title: "Mobile Application", path: "/Services/Development/Mobile-App" },
      ],
    },
    {
      title: "Digital Marketing",
      path: "/Services/Digital_Marketing",
      subItems: [
        { title: "SEO", path: "/Services/Digital_Marketing" },
        { title: "SMM", path: "/Services/Digital_Marketing" },
        { title: "SEM", path: "/Services/Digital_Marketing" },
        { title: "Content Writing", path: "/Services/Digital_Marketing" },
      ],
    },
    {
      title: "HR Consulting",
      path: "/Services/HR_Consulting",
      subItems: [
        { title: "Global Recruitment", path: "/Services/HR_Consulting/Recruitment" },
        { title: "Staffing Service", path: "/Services/HR_Consulting/Staffing" },
        { title: "Contract Staffing", path: "/Services/HR_Consulting/Contract-Staffing" },
      ],
    },
    {
      title: "Payroll Service",
      path: "/Services/PayRoll",
      subItems: [
        { title: "Payroll Management", path: "/Services/PayRoll/Management" },
        { title: "Payroll Outsourcing", path: "/Services/PayRoll/Outsourcing" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-[#062925]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <NavLink to="/Home" onClick={() => setOpen(false)}>
            <img
              src={scrolled ? logo : logoWhite}
              alt="PrimeSource Logo"
              className="w-32 md:w-30 h-auto transition-all duration-300"
            />
          </NavLink>
          

          <div className="flex items-center">
            <div className="hidden md:flex space-x-7 items-center">
               <div className={`hidden lg:flex items-center space-x-4 text-sm ml-6 pl-6 border-l ${scrolled ? 'border-gray-300' : 'border-gray-500/50'}`}>
              <a href="tel:8190901250" className="flex items-center gap-2 hover:underline" style={textColorStyle}>
                <FaPhoneAlt /> +91 8190901250
              </a>
              <a href="mailto:connect@primesourcellp.com" className="flex items-center gap-2 hover:underline" style={textColorStyle}>
                <FaEnvelope /> connect@primesourcellp.com
              </a>
            </div>
              <NavLink to="/Home" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>Home</NavLink>
              <NavLink to="/About" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>About</NavLink>

              <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>


                <NavLink to="/Services" className="flex items-center gap-1 hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>
                  Services 
                </NavLink>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-4 mt-2 bg-white shadow-lg rounded-md w-64 text-black p-2"
                    >
                      {services.map((service) => (
                        <div key={service.title} className="relative group">
                          <NavLink to={service.path} className="flex justify-between items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md">
                            {service.title} <span className="text-xs">→</span>
                          </NavLink>
                          <div className="absolute hidden group-hover:block left-full -top-2 bg-white shadow-lg rounded-md w-64 p-2">
                            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.1 }}>
                              {service.subItems.map((item) => (
                                <NavLink key={item.title} to={item.path} className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                                  {item.title}
                                </NavLink>
                              ))}
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/Job-seeker" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>Job Seeker</NavLink>
              <NavLink to="/Career" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>Career</NavLink>
              <NavLink to="/Testimonial" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>Testimonial</NavLink>
              <NavLink to="/Contact" className="hover:text-[#b8e1dd] transition-colors" style={textColorStyle}>Contact</NavLink>
            </div>

           

            <div className="md:hidden ml-4">
              <MenuToggle toggle={() => setOpen(!open)} scrolled={scrolled} open={open} />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && isMobile && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-30" />
            <motion.div variants={mobileMenuVariants} initial="closed" animate="open" exit="closed" className="fixed top-0 left-0 w-full h-screen bg-[#062925] text-white z-40 flex flex-col">
              <div className="flex justify-between items-center p-4 h-[80px]">
                <NavLink to="/Home" onClick={() => setOpen(false)}>
                  <img src={logoWhite} alt="PrimeSource Logo" className="w-32 md:w-40 h-auto" />
                </NavLink>
                <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
                  <XMarkIcon className="w-8 h-8 text-white" />
                </button>
              </div>

              <motion.div variants={mobileLinkContainerVariants} className="flex flex-col space-y-2 px-6 text-lg overflow-y-auto flex-grow">
                <motion.div variants={mobileLinkVariants}><NavLink to="/Home" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">Home</NavLink></motion.div>
                <motion.div variants={mobileLinkVariants}><NavLink to="/About" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">About</NavLink></motion.div>

                {/* Services - ALWAYS VISIBLE */}
               <motion.div variants={mobileLinkVariants}>
                <div className="border-b border-white/20 py-3">
                  <NavLink
                    to="/Services"
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg font-medium text-white hover:text-[#b8e1dd]"
                  >
                    Services
                  </NavLink>
                  <div className="pl-4 mt-2 space-y-1">
                    {services.map((service) => (
                      <NavLink
                        key={service.title}
                        to={service.path}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base text-gray-300 hover:text-white rounded-md hover:bg-white/10"
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </motion.div>


                <motion.div variants={mobileLinkVariants}><NavLink to="/Job-seeker" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">Job Seeker</NavLink></motion.div>
                <motion.div variants={mobileLinkVariants}><NavLink to="/Career" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">Career</NavLink></motion.div>
                <motion.div variants={mobileLinkVariants}><NavLink to="/Testimonial" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">Testimonial</NavLink></motion.div>
                <motion.div variants={mobileLinkVariants}><NavLink to="/Contact" onClick={() => setOpen(false)} className="block border-b border-white/20 py-3">Contact</NavLink></motion.div>
              </motion.div>

              <div className="mt-auto p-6 space-y-3 text-sm">
                <a href="tel:8190901250" className="flex items-center gap-2"><FaPhoneAlt /> +91 8190901250</a>
                <a href="mailto:connect@primesourcellp.com" className="flex items-center gap-2"><FaEnvelope /> connect@primesourcellp.com</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}