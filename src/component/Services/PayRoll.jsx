import React from 'react';
import { motion } from 'framer-motion';
import JobDriveBanner from '../MovingDots/dot';

// Import local images (using the same placeholder as your existing page)
import payrollIllustration from '../../assets/two.png';
import managementIllustration from '../../assets/two.png';
import outsourcingIllustration from '../../assets/two.png';

// Icons (using Heroicons)
const PayrollIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const OutsourcingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ComplianceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Animation variants (reusing from your existing page)
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
const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/30 hover:shadow-md transition-all"
    variants={item}
    whileHover={{
      y: -12,
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15
      } 
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, description, features, image, reverse = false }) => (
  <motion.div 
    className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    variants={reverse ? slideInRight : slideInLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Image - Reduced size */}
    <motion.div 
      className="lg:w-2/5 w-full flex justify-center"
      variants={scaleUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.3 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-4/5 lg:w-full max-w-xs rounded-2xl shadow-lg"
      />
    </motion.div>

    {/* Content */}
    <motion.div 
      className="lg:w-3/5 w-full"
      variants={reverse ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
    className={`mb-12 ${center ? 'text-center' : ''}`}
    variants={slideInTop}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.h2 
      className="text-3xl font-bold text-gray-900 mb-3"
      variants={slideInTop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-lg text-gray-700 max-w-3xl mx-auto"
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

export default function HRPayrollPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
            className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
            className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-70 md:py-70 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Streamlined <span className="text-emerald-600">HR Payroll Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Simplify your payroll processes, ensure compliance, and focus on growing your business with our comprehensive HR payroll services.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -10px rgba(5, 150, 105, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        {/* <JobDriveBanner /> */}
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our HR Payroll Services" 
            subtitle="Comprehensive payroll solutions designed to streamline your HR operations and ensure compliance" 
            center
          />
          
          <motion.div 
            className="space-y-24"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<PayrollIcon />}
              title="HR Payroll"
              description="Our HR Payroll services are designed to seamlessly integrate with your HR functions, ensuring that employee payroll is not just a process but a smooth experience. We provide end-to-end HR payroll solutions that streamline employee salary processing, statutory compliance, and benefits management. Our system ensures accuracy, transparency, and timeliness while reducing manual workload. From payslip generation to leave and attendance integration, our HR payroll services are tailored to simplify your HR operations and ensure your employees are paid correctly and on time every time."
              features={[
                'Automated salary processing and payslip generation',
                'Attendance and leave integration with real-time tracking',
                'Comprehensive statutory deductions (PF, ESI, PT, LWF, TDS, etc.)',
                'Employee reimbursements and benefits tracking with audit trails',
                'Accuracy, transparency, and efficiency with reduced manual errors',
                'Customizable payroll reports and analytics dashboard',
                'Employee self-service portal for payslips and tax documents'
              ]}
              image={payrollIllustration}
              reverse={true}
            />

            <ServiceCard 
              icon={<ManagementIcon />}
              title="Payroll Management"
              description="Managing payroll in-house can be overwhelming — from handling diverse salary structures to keeping up with tax and compliance regulations. Our Payroll Management services ensure end-to-end control with complete oversight of your payroll processes. Our payroll management services cover the complete cycle of employee compensation — including salary computation, deductions, reimbursements, tax calculations, and compliance with labor laws. We help businesses maintain error-free payroll records, ensure employee satisfaction, and stay compliant with ever-changing regulations."
              features={[
                'Complete salary computation and deductions management',
                'Reimbursement and bonus processing with approval workflows',
                'Multi-level approvals and audit-ready compliance reports',
                'Real-time compliance updates to meet statutory laws across states',
                'Scalable solutions for businesses from 10 to 10,000+ employees',
                'Year-end tax declaration and Form 16 generation',
                'Integration with accounting and ERP systems'
              ]}
              image={managementIllustration}
              reverse={false}
            />

            <ServiceCard 
              icon={<OutsourcingIcon />}
              title="Payroll Outsourcing"
              description="When you outsource payroll to us, you get peace of mind and guaranteed accuracy. We act as your trusted payroll partner, allowing your HR team to focus on core people strategies while we take care of the complexities. Outsource your payroll to our experts and focus on growing your business while we handle the complexities of payroll processing. Our outsourcing model minimizes risks, reduces costs, and guarantees confidentiality. We take care of everything — from statutory filings and tax deductions to seamless salary disbursement — so you can ensure efficiency and compliance without investing in additional resources."
              features={[
                'End-to-end payroll processing and salary disbursement',
                'Comprehensive compliance management (PF, ESI, TDS, GST, etc.)',
                'Tax computation, filing support, and representation if needed',
                'Secure data handling with complete confidentiality and encryption',
                'Cost-effective payroll operations with reduced compliance risks',
                'Dedicated payroll manager and support team',
                'Regular compliance updates and advisory services'
              ]}
              image={outsourcingIllustration}
              reverse={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-emerald-100/50 to-cyan-100/50 rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Benefits of Our Payroll Services" 
            subtitle="Experience these advantages when you choose our comprehensive payroll solutions" 
            center
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard 
              icon={<ComplianceIcon />}
              title="Compliance Assurance"
              description="Stay updated with ever-changing labor laws and tax regulations without the stress of tracking changes yourself. We ensure 100% compliance with all statutory requirements across different states and industries."
            />
            
            <FeatureCard 
              icon={<AutomationIcon />}
              title="Time & Cost Savings"
              description="Automate repetitive payroll tasks and free up your HR team to focus on strategic initiatives. Reduce overhead costs associated with maintaining an in-house payroll department and software."
            />
            
            <FeatureCard 
              icon={<PayrollIcon />}
              title="Accuracy Guarantee"
              description="Minimize errors in salary calculations, tax deductions, and statutory filings. Our automated systems and expert reviews ensure precision in every payroll cycle."
            />
            
            <FeatureCard 
              icon={<SupportIcon />}
              title="Expert Support"
              description="Access to payroll experts who can answer questions and resolve issues quickly. Get dedicated support for complex payroll scenarios and compliance challenges."
            />
            
            <FeatureCard 
              icon={<ManagementIcon />}
              title="Scalable Solutions"
              description="Our payroll services grow with your business. Whether you have 10 employees or 10,000, we have the infrastructure and expertise to handle your requirements."
            />
            
            <FeatureCard 
              icon={<OutsourcingIcon />}
              title="Data Security"
              description="Enterprise-grade security measures to protect sensitive employee and company information. We use encryption, access controls, and regular audits to ensure data protection."
            />
          </motion.div>

          {/* Additional detailed explanation */}
          <motion.div 
            className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/30"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Payroll Services?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg text-emerald-700 mb-3">For HR Payroll</h4>
                <p className="mb-4">
                  Our HR Payroll solution integrates seamlessly with your existing HR systems, creating a unified platform for all employee management needs. We provide:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automated payroll processing that reduces manual effort by up to 80%</li>
                  <li>Real-time synchronization with attendance and leave management systems</li>
                  <li>Comprehensive statutory compliance across all Indian labor laws</li>
                  <li>Employee self-service portal for transparency and reduced queries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-emerald-700 mb-3">For Payroll Outsourcing</h4>
                <p className="mb-4">
                  When you outsource your payroll to us, you're not just getting a service provider - you're gaining a strategic partner. Our outsourcing benefits include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cost savings of up to 40% compared to in-house payroll management</li>
                  <li>Access to payroll experts with an average of 8+ years of experience</li>
                  <li>Zero compliance penalties guarantee with our accuracy commitment</li>
                  <li>Scalable solutions that adapt to your business growth and changing needs</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-4xl mx-4 lg:mx-8 mt-12 mb-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to simplify your payroll processes?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Focus on growing your business while we handle the complexities of payroll management and compliance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white hover:bg-gray-100 text-emerald-800 font-medium py-3 px-8 rounded-lg transition-colors mr-4"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.button>
            <motion.button 
              className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}