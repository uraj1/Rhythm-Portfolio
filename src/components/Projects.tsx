import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Brain, TrendingUp, Database, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Exploratory Data Analysis', 'Data Visualization', 'Business Intelligence', 'Statistical Analysis'];

  const projects = [
    {
      id: 1,
  title: 'Blinkit Sales Analysis – EDA',
  category: 'Exploratory Data Analysis',
  description: 'Comprehensive exploratory data analysis of Blinkit sales data, uncovering business insights and KPI-driven recommendations for sales optimization.',
  longDescription: 'This project delivers an in-depth exploratory data analysis on Blinkit\'s sales dataset. It includes complete data cleaning, preprocessing, KPI computation, and advanced visualizations such as pie charts, bar charts, stacked columns, funnel charts, and donut charts. The project generated actionable insights that highlight sales trends, category performance, outlet-wise profitability, and customer behavior. Strategic recommendations were provided for business expansion, inventory optimization, and customer engagement.',
  image: 'https://mavenanalyticsio-upload-bucket-prod.s3.us-west-2.amazonaws.com/202624845/projects/4056b48f-a491-4272-a089-3c79e35aaf84.png',
  technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  metrics: [
    'Total Sales: $1.2M',
    'Avg Sales: $141',
    'Items Sold: 8,523',
    'Avg Rating: 4.0'
  ],
  github: 'https://github.com/rhythmgarg2606/BlinkitSalesAnalysis-EDA',
  demo: 'https://github.com/rhythmgarg2606/BlinkitSalesAnalysis-EDA/blob/main/Blinkit_Sales_Analysis_Report.docx',
  icon: Brain
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
    // {
    //   id: 4,
    //   title: 'Financial Risk Assessment System',
    //   category: 'Machine Learning',
    //   description: 'Credit risk evaluation model using advanced ML techniques to assess loan default probability for financial institutions.',
    //   longDescription: 'Built a comprehensive credit risk assessment system using Logistic Regression, Random Forest, and Gradient Boosting. The model analyzes 30+ financial and demographic features to predict default probability with AUC of 0.87. Includes model interpretability features and regulatory compliance reporting.',
    //   image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Python', 'Scikit-learn', 'SHAP', 'Plotly', 'Docker'],
    //   metrics: ['0.87 AUC Score', '30+ Features', '100K+ Loans', '15% Risk Reduction'],
    //   github: 'https://github.com/rhythmgarg2606',
    //   demo: '#',
    //   icon: Database,
    // },
    // {
    //   id: 5,
    //   title: 'Supply Chain Optimization',
    //   category: 'Business Intelligence',
    //   description: 'Data-driven supply chain analysis identifying bottlenecks and optimization opportunities using advanced analytics.',
    //   longDescription: 'Analyzed supply chain data across 500+ suppliers and 50+ distribution centers. Identified critical bottlenecks, optimized inventory levels, and reduced operational costs by 18%. Created automated reporting system for supply chain KPIs and risk monitoring.',
    //   image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Power BI', 'SQL Server', 'Python', 'Excel', 'DAX'],
    //   metrics: ['18% Cost Reduction', '500+ Suppliers', '50+ Centers', '24/7 Monitoring'],
    //   github: 'https://github.com/rhythmgarg2606',
    //   demo: '#',
    //   icon: TrendingUp,
    // },
    // {
    //   id: 6,
    //   title: 'Social Media Sentiment Analysis',
    //   category: 'Machine Learning',
    //   description: 'NLP-powered sentiment analysis tool for brand monitoring and customer feedback analysis across social platforms.',
    //   longDescription: 'Developed a real-time sentiment analysis system processing 100K+ social media posts daily. Used BERT and LSTM models for emotion detection and sentiment classification. Created automated alerts for negative sentiment spikes and competitive analysis features.',
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Python', 'BERT', 'TensorFlow', 'Twitter API', 'MongoDB'],
    //   metrics: ['100K+ Posts/Day', '92% Accuracy', 'Real-time Processing', '5 Languages'],
    //   github: 'https://github.com/rhythmgarg2606',
    //   demo: '#',
    //   icon: Brain,
    // },
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
    <section id="projects" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header - Mobile optimized */}
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing impactful data science projects that solve real-world business problems
            </p>
          </motion.div>

          {/* Category Filter - Mobile optimized */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
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

          {/* Projects Grid - Mobile optimized */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <project.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4">
                      {project.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="text-center p-1.5 md:p-2 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">{metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center space-x-1 md:space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <Eye className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-sm md:text-base font-medium">Details</span>
                      </motion.button>

                      <div className="flex items-center space-x-2 md:space-x-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-3 h-3 md:w-4 md:h-4 text-gray-700 dark:text-gray-300" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 md:p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-white" />
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

      {/* Project Modal - Mobile optimized */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl max-w-full w-full md:max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                >
                  ×
                </button>
                <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{selectedProject.title}</h3>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs md:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                      {selectedProject.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-2 md:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <div className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">View Code</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors duration-300 w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Live Demo</span>
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