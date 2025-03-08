import React from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaInstagram, 
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden font-unbounded">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D80074]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D80074]/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Footer top section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Logo and about */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold">
                <span className="text-white">MSK</span>
                <span className="text-[#D80074]">.</span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-6 font-satoshi"
            >
              We create innovative strategies and experiences that drive results. Our focus is on helping brands connect with their audience in meaningful ways.
            </motion.p>

            {/* Social media icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#D80074] flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 hover:bg-[#D80074] flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <div className="text-[#D80074] w-5 flex-shrink-0">
                <FaEnvelope />
              </div>
              <span className="text-sm text-gray-300">msk@mskglobal.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-[#D80074] w-5 flex-shrink-0">
                <FaPhone />
              </div>
              <span className="text-sm text-gray-300">+1 093 839 930</span>
            </div>
          </motion.div>

          {/* Menu container on right, items left-aligned */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:justify-self-end"
          >
          
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Blog", "Review", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-[#D80074] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">•</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © {currentYear} MSK Global. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#D80074] text-xs transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D80074] text-xs transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D80074] text-xs transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;