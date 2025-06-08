
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Users, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'TechCorp Analytics',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading data science initiatives for enterprise clients, developing predictive models and advanced analytics solutions.',
      achievements: [
        'Increased client retention by 35% through predictive churn modeling',
        'Led a team of 5 data analysts on multiple high-impact projects',
        'Designed and implemented automated reporting systems reducing manual work by 60%',
        'Developed machine learning models achieving 92% average accuracy'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'AWS', 'Machine Learning'],
      icon: TrendingUp,
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Data Analyst',
      company: 'DataInsights Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Specialized in business intelligence and statistical analysis for financial services clients.',
      achievements: [
        'Optimized investment strategies resulting in 18% portfolio performance improvement',
        'Created comprehensive dashboards for C-level executives',
        'Conducted A/B testing leading to 25% increase in conversion rates',
        'Mentored junior analysts and established best practices'
      ],
      technologies: ['R', 'Power BI', 'Excel', 'SPSS', 'PostgreSQL'],
      icon: Award,
      color: 'from-teal-600 to-teal-800'
    },
    {
      title: 'Junior Data Scientist',
      company: 'StartupAnalytics',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on customer analytics and growth optimization for e-commerce platforms.',
      achievements: [
        'Built customer segmentation models improving targeted marketing by 40%',
        'Analyzed user behavior patterns leading to UX improvements',
        'Developed recommendation systems increasing sales by 22%',
        'Implemented real-time analytics tracking customer journeys'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'MongoDB', 'JavaScript'],
      icon: Users,
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Data Analysis Intern',
      company: 'Research Institute',
      location: 'Boston, MA',
      period: '2018 - 2019',
      type: 'Internship',
      description: 'Conducted statistical research and analysis on healthcare data for academic publications.',
      achievements: [
        'Co-authored 3 peer-reviewed research papers',
        'Analyzed clinical trial data for drug efficacy studies',
        'Developed statistical models for patient outcome prediction',
        'Presented findings at national healthcare conferences'
      ],
      technologies: ['R', 'STATA', 'SAS', 'Excel', 'LaTeX'],
      icon: Target,
      color: 'from-orange-600 to-orange-800'
    }
  ];

  const education = [
   {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  institution: 'National Institute of Technology, Kurukshetra',
  location: 'Kurukshetra, Haryana, India',
  period: '2022 – Present',
  cgpa: '7.7/10',
  highlights: [
    'Data Mining & Analytics',
    'Big Data Analytics',
    'Computer Organization & Architecture',
    'Design & Analysis of Algorithms',
    'Distributed Computing',
    'Operating Systems',
      'Computer Networks',
      'Database Management Systems',
      'Software Engineering',
  ]
}

    // {
    //   degree: 'Bachelor of Technology in Computer Science',
    //   institution: 'UC Berkeley',
    //   location: 'Berkeley, CA',
    //   period: '2013 - 2017',
    //   cgpa: '3.8/4.0',
    //   highlights: [
    //     'Minor in Computer Science',
    //     'Summa Cum Laude graduate',
    //     'President of Mathematics Student Association',
    //     'Research in Applied Statistics and Probability'
    //   ]
    // }
  ];

  const certifications = [
    'Data Analyst OneRoadmap',
    'Power BI Data Analyst Associate by LearnTube.ai',
    'Frontend Dev. Libraries by FreeCodeCamp',
    'The Ultimate Guide to Effective Communication by Ankur Warikoo',
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A progressive career in data science with a track record of delivering impactful solutions
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Work Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 hidden lg:block"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } mb-12`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-600 flex items-center justify-center z-10 hidden lg:flex">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <exp.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center lg:hidden`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <exp.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                    </div>
                    {edu.cgpa && (
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Committed to staying current with the latest developments in data science and analytics. 
                    Regularly pursuing additional certifications and attending industry conferences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;