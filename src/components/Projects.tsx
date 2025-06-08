import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Machine Learning', 'Data Visualization', 'Business Intelligence', 'Statistical Analysis'];

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Prediction Model',
      category: 'Machine Learning',
      description: 'Advanced machine learning model predicting customer churn with 94% accuracy using ensemble methods and feature engineering.',
      longDescription: 'Developed a comprehensive customer churn prediction system using Random Forest, XGBoost, and Neural Networks. The model processes over 50 customer behavioral features and achieved 94% accuracy with precision of 0.91 and recall of 0.89. Implemented real-time scoring pipeline and A/B testing framework.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Flask'],
      metrics: ['94% Accuracy', '91% Precision', '89% Recall', '500K+ Records'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: Brain,
    },
    {
      id: 2,
      title: 'Sales Performance Dashboard',
      category: 'Data Visualization',
      description: 'Interactive Tableau dashboard providing real-time sales insights and KPI tracking for executive decision-making.',
      longDescription: 'Created an executive-level dashboard integrating data from multiple sources including CRM, ERP, and marketing platforms. Features include real-time sales tracking, geographic performance analysis, product line comparisons, and predictive sales forecasting with drill-down capabilities.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Tableau', 'SQL', 'Python', 'PostgreSQL', 'REST APIs'],
      metrics: ['Real-time Updates', '15+ KPIs', '5 Data Sources', '50+ Users'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: BarChart3,
    },
    {
      id: 3,
      title: 'Market Basket Analysis',
      category: 'Statistical Analysis',
      description: 'Association rule mining to identify product relationships and optimize cross-selling strategies for e-commerce platform.',
      longDescription: 'Implemented Apriori and FP-Growth algorithms to analyze customer purchase patterns across 2M+ transactions. Discovered high-value product associations leading to 23% increase in cross-selling revenue and optimized product placement strategies.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'MLxtend', 'Pandas', 'NetworkX', 'Matplotlib'],
      metrics: ['2M+ Transactions', '23% Revenue Increase', '1000+ Product Rules', '95% Confidence'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: TrendingUp,
    },
    {
      id: 4,
      title: 'Financial Risk Assessment System',
      category: 'Machine Learning',
      description: 'Credit risk evaluation model using advanced ML techniques to assess loan default probability for financial institutions.',
      longDescription: 'Built a comprehensive credit risk assessment system using Logistic Regression, Random Forest, and Gradient Boosting. The model analyzes 30+ financial and demographic features to predict default probability with AUC of 0.87. Includes model interpretability features and regulatory compliance reporting.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'SHAP', 'Plotly', 'Docker'],
      metrics: ['0.87 AUC Score', '30+ Features', '100K+ Loans', '15% Risk Reduction'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: Database,
    },
    {
      id: 5,
      title: 'Supply Chain Optimization',
      category: 'Business Intelligence',
      description: 'Data-driven supply chain analysis identifying bottlenecks and optimization opportunities using advanced analytics.',
      longDescription: 'Analyzed supply chain data across 500+ suppliers and 50+ distribution centers. Identified critical bottlenecks, optimized inventory levels, and reduced operational costs by 18%. Created automated reporting system for supply chain KPIs and risk monitoring.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Power BI', 'SQL Server', 'Python', 'Excel', 'DAX'],
      metrics: ['18% Cost Reduction', '500+ Suppliers', '50+ Centers', '24/7 Monitoring'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: TrendingUp,
    },
    {
      id: 6,
      title: 'Social Media Sentiment Analysis',
      category: 'Machine Learning',
      description: 'NLP-powered sentiment analysis tool for brand monitoring and customer feedback analysis across social platforms.',
      longDescription: 'Developed a real-time sentiment analysis system processing 100K+ social media posts daily. Used BERT and LSTM models for emotion detection and sentiment classification. Created automated alerts for negative sentiment spikes and competitive analysis features.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'BERT', 'TensorFlow', 'Twitter API', 'MongoDB'],
      metrics: ['100K+ Posts/Day', '92% Accuracy', 'Real-time Processing', '5 Languages'],
      github: 'https://github.com/rhythmgarg2606',
      demo: '#',
      icon: Brain,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing impactful data science projects that solve real-world business problems
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="text-center p-2 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">View Details</span>
                      </motion.button>

                      <div className="flex items-center space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <div className="font-semibold text-gray-900 dark:text-white">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;