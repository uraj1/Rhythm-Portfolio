import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb, BarChart3, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Projects Completed', icon: Target },
    { number: '1+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Active Contributions', icon: Users },
    { number: '10+', label: 'Technologies Mastered', icon: Lightbulb },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                Passionate About Data-Driven Solutions
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a dedicated data analyst with a passion for uncovering insights hidden within complex datasets. 
                My expertise spans across statistical analysis, GEN-Ai, data visualization, and business intelligence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in mathematics and computer science, I specialize in transforming raw data 
                into actionable insights that drive strategic business decisions. I believe that every dataset tells a 
                story, and my role is to help organizations understand and leverage that narrative.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach combines technical expertise with business acumen, ensuring that analytical solutions are 
                not only statistically sound but also practically relevant and implementable.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-2xl p-8 relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-12 h-12 bg-teal-200 dark:bg-teal-700 rounded-full opacity-20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <BarChart3 className="w-12 h-12 text-blue-600" />
                    <Database className="w-12 h-12 text-teal-600" />
                    <TrendingUp className="w-12 h-12 text-orange-600" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Core Competencies
                  </h4>
                  
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Advanced Statistical Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>Machine Learning & GEN Ai</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span>Data Visualization & Storytelling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>PowerBi Developer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h4
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;