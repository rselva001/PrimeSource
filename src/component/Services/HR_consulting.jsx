import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaUserTie, FaUsers, FaClipboardCheck, FaHandshake, FaChartLine } from 'react-icons/fa';
import WaveBanner from '../Animations/WaveBanner';
import { TypeAnimation } from 'react-type-animation';

// Import local images
import globalRecruitmentImage from '../../assets/four.png';
import staffingServicesImage from '../../assets/four.png';
import contractStaffingImage from '../../assets/four.png';

const HRConsultingPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="bg-gray-50 overflow-x-hidden">

      {/* Hero Section */}
      <section 
        ref={ref}
        className="relative min-h-screen overflow-hidden bg-white text-[#044A42] py-12 md:py-20 px-4 md:px-6 flex items-center"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6" data-aos="fade-right" data-aos-delay="100">
              Global HR & Staffing Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8" data-aos="fade-right" data-aos-delay="200">
              Connecting businesses with the right talent, anywhere in the world.
            </p>
            <div data-aos="fade-right" data-aos-delay="300">
              <motion.button
                className="bg-[#3A9188] hover:bg-[#2D7A72] text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors shadow-lg text-base md:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 md:p-8 rounded-lg"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <TypeAnimation
              sequence={[
                'Global Recruitment Experts', 2000,
                'Reliable Staffing Solutions', 2000,
                'Flexible Contract Hiring', 2000,
                'HR Consulting Services', 2000,
                'Talent Management', 2000
              ]}
              wrapper="h2"
              cursor={true}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#044A42] mb-4 md:mb-6"
              speed={40}
              repeat={Infinity}
            />
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We specialize in helping businesses scale with global recruitment, professional staffing, 
              flexible contract workforce solutions, and comprehensive HR consulting services tailored 
              to your organizational needs.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-xs md:text-sm mb-1">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-4 h-6 md:w-5 md:h-8 border-2 border-gray-400 rounded-full flex justify-center p-1"
            >
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-1 h-2 bg-gray-400 rounded-full"
              />
            </motion.div>
          </div>
        </div>
        <WaveBanner />
      </section>

      {/* Global Recruitment */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            data-aos="fade-right"
          >
            <FaGlobe className="text-5xl md:text-6xl text-[#3A9188] mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#044A42] mb-3 md:mb-4">Global Recruitment</h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
              Expand your reach with international hiring. We connect you with top talent across 
              regions, ensuring the right cultural and professional fit for your organization's unique needs.
            </p>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-base md:text-lg">
              <li className="flex items-start">🌍 Access to global talent pools across 30+ countries</li>
              <li className="flex items-start">🤝 End-to-end recruitment process management</li>
              <li className="flex items-start">⚡ Faster hiring cycles with quality assurance</li>
              <li className="flex items-start">🌐 Cultural alignment and localization support</li>
            </ul>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            data-aos="fade-left"
          >
            <img 
              src={globalRecruitmentImage} 
              alt="Global Recruitment" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="flex justify-center order-1 md:order-1"
            data-aos="fade-right"
          >
            <img 
              src={staffingServicesImage} 
              alt="Staffing Services" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div 
            className="order-2 md:order-2"
            data-aos="fade-left"
          >
            <FaUsers className="text-5xl md:text-6xl text-[#3A9188] mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#044A42] mb-3 md:mb-4">Staffing Services</h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
              Find the right professionals for your business. Whether permanent or temporary, 
              we match you with skilled candidates tailored to your specific requirements and company culture.
            </p>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-base md:text-lg">
              <li>👥 Permanent staffing for long-term needs</li>
              <li>🔧 Temporary staffing for flexible projects</li>
              <li>🎯 Skill-based matching process</li>
              <li>📊 Workforce planning and analytics</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contract Staffing */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            data-aos="fade-right"
            className="order-2 md:order-1"
          >
            <FaClipboardCheck className="text-5xl md:text-6xl text-[#3A9188] mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#044A42] mb-3 md:mb-4">Contract Staffing</h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
              Gain workforce flexibility with contract staffing. Scale up or down quickly without 
              compromising on quality or compliance with local regulations.
            </p>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-base md:text-lg">
              <li>📑 Flexible contracts for short & long-term needs</li>
              <li>⚖️ Compliance with local labor laws</li>
              <li>💼 Cost-effective workforce solutions</li>
              <li>🔄 Seamless onboarding and offboarding</li>
            </ul>
          </motion.div>
          <motion.div 
            data-aos="fade-left"
            className="flex justify-center order-1 md:order-2"
          >
            <img 
              src={contractStaffingImage} 
              alt="Contract Staffing" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#044A42] mb-3 md:mb-4">Comprehensive HR Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond recruitment, we offer a full spectrum of HR services to support your organization's growth and development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaUserTie className="text-4xl text-[#3A9188] mb-4" />
              <h3 className="text-xl font-bold text-[#044A42] mb-3">HR Consulting</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Strategic HR guidance to optimize your people operations, policies, and organizational structure.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaChartLine className="text-4xl text-[#3A9188] mb-4" />
              <h3 className="text-xl font-bold text-[#044A42] mb-3">Talent Management</h3>
              <p className="text-gray-600 text-base md:text-lg">
                End-to-end talent solutions including development, retention strategies, and succession planning.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaHandshake className="text-4xl text-[#3A9188] mb-4" />
              <h3 className="text-xl font-bold text-[#044A42] mb-3">Payroll Services</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Comprehensive payroll management ensuring compliance and accuracy across different jurisdictions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#044A42] mb-3 md:mb-4">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why businesses worldwide trust our HR and staffing solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Primesource Consulting is a trustworthy recruitment agency.They helped me secure a job in the UK public sector. Their interview process is transparent, and they are very straightforward about the outcome.",
                author: "Sri Viki",
              },
              {
                quote: "From the initial contact to the final stages of the hiring process, their team was supportive, professional, and transparent. They took the time to understand my skills and career goals, and matched me with a fantastic opportunity. I felt well-prepared and informed throughout the process.",
                author: "Rudhreesh M",
              },
              {
                quote: "I highly recommend this Company to anyone looking for a reliable and effective recruitment service. Their commitment to delivering excellent results is evident, and I'm grateful for their role in helping me secure a great new position.",
                author: "Jeeva Nalini",
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center mb-4">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 md:mb-6 text-base md:text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#044A42] text-base md:text-lg">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#3A9188] text-white">
        <div className="w-full max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Build Your Dream Team with Us
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            From global recruitment to staffing, contract hiring, and comprehensive HR consulting — we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="bg-white hover:bg-gray-100 text-[#062925] font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors shadow-lg text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  ); 
};

export default HRConsultingPage;