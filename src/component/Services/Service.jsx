import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import images
import HeroImage from '../../assets/four.png';
import WebDevelopmentImage from '../../assets/four.png';
import WebAppImage from '../../assets/four.png';
import MobileAppImage from '../../assets/four.png';
import WebAppProcessImage from '../../assets/four.png';
import MobileDevicesImage from '../../assets/four.png';
import CrossPlatformImage from '../../assets/four.png';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const AppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
// ✍️ Content Writing
const ContentWritingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9M4 8h16M4 16h16M4 12h8" />
  </svg>
);

// 📈 Search Engine Marketing
const SearchEngineMarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13M9 11l-3 3m0 0l-3-3m3 3V4" />
  </svg>
);

// 📱 Social Media Marketing
const SocialMediaMarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a2 2 0 00-2 2v3H9v4h4v8h4v-8h3l1-4h-4V4a1 1 0 011-1h3z" />
  </svg>
);

// 🔍 Search Engine Optimization
const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// 🌍 Global Recruitment
const GlobalRecruitmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0v18m9-9H3" />
  </svg>
);

// 👥 Staffing Services
const StaffingServicesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M15 11a4 4 0 10-6 0M17 20v-2a4 4 0 00-3-3.87M7 20v-2a4 4 0 013-3.87" />
  </svg>
);

// 📑 Contract Staffing
const ContractStaffingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6m-7 9a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H8z" />
  </svg>
);

// 💰 Payroll Outsourcing
const PayrollOutsourcingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.104.896 2 2 2h2a2 2 0 010 4h-2m0-10v1m0 8v1" />
  </svg>
);

// 🧾 HR Payroll Management
const HrPayrollManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2h6v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2h-2V3H9v2H7a2 2 0 00-2 2v12a2 2 0 002 2h2z" />
  </svg>
);


const item = {
  hidden: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.5 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.9,
      ease: "easeOut"
    } 
  }
};

const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInTop = {
  hidden: { 
    opacity: 0, 
    y: -60,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInBottom = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.85,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

// Reusable components
const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
    className={`mb-16 ${center ? 'text-center' : ''}`}
    variants={slideInTop}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.h2 
      className="text-4xl font-bold text-gray-900 mb-4"
      variants={slideInTop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        variants={slideInBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

const ServiceCard = ({ icon, title, description, features, reverse = false, imageSrc }) => (
  <motion.div 
    className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-24 last:mb-0`}
    variants={reverse ? slideInRight : slideInLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Content */}
    <motion.div 
      className="lg:w-1/2 w-full"
      variants={reverse ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-700">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
    
    {/* Image Placeholder */}
    <motion.div 
      className="lg:w-1/2 w-full flex justify-center"
      variants={scaleUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.3 }}
    >
      <div className="relative">
        <div className="absolute -inset-4  rounded-3xl blur-xl z-0"></div>
        <div className="w-64 h-64 rounded-2xl  shadow-xl relative z-10 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/30 hover:shadow-lg transition-all duration-300 group"
    variants={item}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceCategory = ({ title, description, services }) => (
  <motion.div 
    className="mb-20"
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <motion.div 
          key={index}
          className="bg-gray-50 p-6 rounded-xl border border-gray-200"
          variants={slideInBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-5 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-20 right-5 w-72 h-72 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 left-20 w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.4, 0.7],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={slideInBottom}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Digital Solutions</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
              variants={slideInBottom}
              transition={{ delay: 0.2 }}
            >
              Comprehensive services tailored to your business needs. From web development to digital marketing and HR solutions, we provide end-to-end services to help your business thrive.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-5"
              variants={slideInBottom}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="mt-8 md:mt-8 bg-[#3A9188] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#044A42] transition font-semibold text-lg"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05, 
                  y: isMobile ? 0 : -3,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Get Started
              </motion.button>
            
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
          >
            <div className="absolute -inset-4 md:-inset-6  rounded-3xl blur-2xl"></div>
            <motion.div
              animate={{
                y: isMobile ? 0 : [0, -12, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <div className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto h-80 overflow-hidden">
                <img 
                  src={HeroImage} 
                  alt="Digital Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Digital Solutions" 
            subtitle="Comprehensive services tailored to your business needs" 
            center
          />
          
          <motion.div 
            className="space-y-32"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<AppIcon />}
              title="Website Development"
              description="At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert. In today's competitive market, your website is the first impression of your brand, and we make sure it is powerful, user-friendly, and future-ready. Our website development services combine creativity, technology, and strategy to deliver solutions that help businesses establish a strong online presence and achieve measurable results."
              features={[
                'Custom designs',
                'SEO optimized',
                'Fast performance',
                'Mobile-first approach',
                'Website Maintenance and Support'
              ]}
              imageSrc={WebDevelopmentImage}
            />

            <ServiceCard 
              icon={<MobileIcon />}
              title="Web Application Development"
              description="At Primesource, we create web applications that are robust, scalable, and user-friendly designed to help businesses succeed in the digital era. From simple tools to complex enterprise platforms, our solutions combine cutting-edge technology with creative problem-solving, ensuring applications that are both functional and visually engaging."
              features={[
                'Custom business logic',
                'Database integration',
                'User authentication',
                'API connections',
                'Cloud Platforms'
              ]}
              reverse={true}
              imageSrc={WebAppImage}
            />

            <ServiceCard 
              icon={<MobileIcon />}
              title="Mobile Application Development"
              description="At Primesource, we specialize in building powerful mobile applications for Android and iOS platforms that deliver functionality, performance, and exceptional user experience. In today's mobile-first world, apps are more than just tools — they are gateways that connect businesses with customers, enhance engagement, and drive growth."
              features={[
                'iOS & Android App development',
                'Custom Mobile App Development',
                'App Maintenance, Support, and Upgrades',
                'Cross-Platform and Hybrid App Development'
              ]}
              imageSrc={MobileAppImage}
            />
          </motion.div>
        </div>
      </section>

      {/* Website Development Details */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Building Digital Experiences That Inspire"
            subtitle="At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert."
            center
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard 
              icon="🛠️"
              title="Custom Website Development"
              description="Every business is unique, and your website should reflect that. At Primesource, we craft custom websites tailored to your brand identity, industry, and customer expectations."
            />
            <FeatureCard 
              icon="🛒"
              title="E-Commerce Development"
              description="We help companies launch and scale e-commerce platforms that deliver seamless buying experiences with secure payment gateways and inventory management."
            />
            <FeatureCard 
              icon="📊"
              title="Web Applications and Advanced Solutions"
              description="For businesses seeking more than a standard website, we offer advanced web development solutions including web applications, portals, and custom integrations."
            />
            <FeatureCard 
              icon="📱"
              title="Mobile-Responsive Design"
              description="Primesource ensures that every website we build is fully optimized for mobile, tablet, and desktop with exceptional user experience."
            />
            <FeatureCard 
              icon="🔧"
              title="Website Maintenance and Support"
              description="We provide website maintenance and support services to keep your site secure, updated, and optimized for continuous performance."
            />
            <FeatureCard 
              icon="⚡"
              title="Performance Optimization"
              description="We optimize websites for speed, SEO, and conversion rates to ensure your digital presence delivers maximum results."
            />
          </motion.div>
        </div>
      </section>

      {/* Web Application Development Details */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Web Application Development Services"
            subtitle="At Primesource, we create web applications that are robust, scalable, and user-friendly — designed to help businesses succeed in the digital era."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <motion.div
              className="space-y-8"
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Primesource for Web Apps?</h3>
                <p className="text-gray-600">
                  What sets us apart is our ability to design digital experiences that align perfectly with business goals. Every application is custom-built to meet specific requirements, ensuring flexibility and adaptability as your business grows. We focus on delivering secure, future-ready applications while maintaining a seamless user experience with clean design and smooth navigation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Web App Development Process</h3>
                <p className="text-gray-600">
                  We follow a structured development process that begins with careful planning to understand your business model, target audience, and objectives. From there, we move to UI and UX design, where we create intuitive layouts that engage users and simplify interaction.
                </p>
                <p className="text-gray-600 mt-4">
                  Development is carried out using the latest frameworks such as React, Angular, Vue, Node.js, and Laravel, ensuring speed, reliability, and scalability. Before launch, every application undergoes rigorous testing across multiple devices and browsers to guarantee flawless performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4  rounded-3xl blur-xl z-0"></div>
                <img 
                  src={WebAppProcessImage} 
                  alt="Web App Development Process"
                  className="relative z-10 rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                    <p className="text-gray-600">React.js, Angular, Vue.js</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                    <p className="text-gray-600">Node.js, Laravel, Django</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Databases</h4>
                    <p className="text-gray-600">MySQL, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Cloud</h4>
                    <p className="text-gray-600">AWS, Azure, Google Cloud</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Details */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Mobile Application Development"
            subtitle="Reach your audience on any device with native and cross-platform solutions"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <div className="absolute -inset-4 rounded-3xl blur-xl z-0"></div>
                <img 
                  src={MobileDevicesImage} 
                  alt="Mobile App Development"
                  className="relative z-10 rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">iOS & Android Development</h3>
              <p className="text-gray-600 mb-8">
                We create mobile experiences that feel native to each platform while maintaining a consistent brand identity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">iOS Apps</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Swift & Objective-C</li>
                    <li className="text-gray-600">Apple Design Guidelines</li>
                    <li className="text-gray-600">App Store Optimization</li>
                    <li className="text-gray-600">iPhone & iPad Support</li>
                  </ul>
                </div>
                <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Android Apps</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Kotlin & Java</li>
                    <li className="text-gray-600">Material Design</li>
                    <li className="text-gray-600">Google Play Optimization</li>
                    <li className="text-gray-600">Multi-device Support</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cross-Platform Development</h3>
              <p className="text-gray-600 mb-4">
                Using frameworks like Flutter and React Native, we build applications that work seamlessly across Android and iOS, reducing development costs and time-to-market.
              </p>

              <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Custom Mobile App Development</h4>
                <p className="text-gray-600">
                  Every business has unique needs, and we believe your mobile app should reflect that. Primesource designs and develops custom applications tailored to your business objectives, user requirements, and brand identity.
                </p>
              </div>
              
              <div className="relative mt-8">
                <div className="absolute -inset-4  rounded-3xl blur-xl z-0"></div>
                <img 
                  src={CrossPlatformImage} 
                  alt="Cross Platform Development"
                  className="relative z-10 rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-emerald-100/50 to-cyan-100/50 rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Complete Service Portfolio"
            subtitle="Beyond development, we offer comprehensive digital marketing and HR solutions to support your business growth"
            center
            
          />

          <div className="space-y-20">
            {/* Digital Marketing */}

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Digital Marketing Services</h3>
              <p className="text-gray-600 mb-10">Enhance your online presence and reach your target audience with our comprehensive digital marketing solutions.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Search Engine Optimization (SEO)",
                    desc: "Improve your website's visibility in search engines and drive organic traffic with our strategic SEO services.",
                    icon: "🔍"
                  },
                  {
                    title: "Social Media Marketing (SMM)",
                    desc: "Engage with your audience and build brand awareness through effective social media strategies.",
                    icon: "📱"
                  },
                  {
                    title: "Search Engine Marketing (SEM)",
                    desc: "Drive immediate traffic and conversions with targeted paid search campaigns across major search engines.",
                    icon: "💻"
                  },
                  {
                    title: "Content Writing",
                    desc: "Create valuable, relevant content to attract and retain your target audience, driving profitable customer action.",
                    icon: "✍️"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Consulting */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">HR Consulting Services</h3>
              <p className="text-gray-600 mb-10">Streamline your human resources processes with our expert consulting services.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Global Recruitment",
                    desc: "Access top talent from around the world with our comprehensive global recruitment solutions.",
                    icon: "🌍"
                  },
                  {
                    title: "Staffing Services",
                    desc: "Find the right professionals for your organization with our tailored staffing solutions.",
                    icon: "👥"
                  },
                  {
                    title: "Contract Staffing",
                    desc: "Flexible staffing solutions to meet your project-based or temporary workforce needs.",
                    icon: "📑"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payroll */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Payroll Services</h3>
              <p className="text-gray-600 mb-10">Efficient and compliant payroll management solutions for businesses of all sizes.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "HR Payroll Management",
                    desc: "Comprehensive payroll management services that integrate with your HR processes.",
                    icon: "💼"
                  },
                  {
                    title: "Payroll Outsourcing",
                    desc: "Outsource your payroll operations to experts to ensure accuracy, compliance, and efficiency.",
                    icon: "📊"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-3xl p-12 md:p-16 shadow-2xl shadow-emerald-500/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_2px)] [background-size:32px_32px]"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Let's create a customized solution that drives growth and delivers the results you deserve.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-5 justify-center"
              >
               <motion.button 
                                className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg shadow-black/10"
                                whileHover={{ 
                                  scale: 1.05,
                                  boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Get Started Today
                              </motion.button>  
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}