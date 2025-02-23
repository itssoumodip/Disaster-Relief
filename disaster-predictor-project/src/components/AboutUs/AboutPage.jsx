import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Globe, Users, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import StatsCounter from './StatsCounter';
import TeamSection from './TeamSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6"
          >
            Empowering Communities
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Building resilience through immediate disaster response and community support
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-8">
              We are dedicated to providing rapid response during disasters and building 
              stronger, more resilient communities through united relief efforts.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "24/7 Emergency Response" },
                { icon: Heart, text: "Community Support Programs" },
                { icon: Globe, text: "Nationwide Coverage" },
                { icon: Users, text: "Volunteer Network" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src="https://plus.unsplash.com/premium_photo-1663100428950-abf1e8f9e80f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Mission" 
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">Have questions? We're here to help.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", info: "contact@impactrelief.org" },
              { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
              { icon: MapPin, title: "Location", info: "New York, NY 10001" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;