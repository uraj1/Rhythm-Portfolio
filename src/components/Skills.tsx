
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Brain, TrendingUp, PieChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-600 to-blue-800',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 92 },
        { name: 'JavaScript', level: 85 },
        { name: 'R', level: 80 },
      ],
    },
    {
      title: 'Data Analysis Tools',
      icon: BarChart3,
      color: 'from-teal-600 to-teal-800',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 92 },
        { name: 'Excel', level: 90 },
        { name: 'Tableau', level: 88 },
        { name: 'Power BI', level: 85 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-purple-800',
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 82 },
        { name: 'XGBoost', level: 88 },
        { name: 'Keras', level: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-600 to-orange-800',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'MongoDB', level: 50 },
        { name: 'SQLite', level: 85 },
        { name: 'Redis', level: 40 },
      ],
    },
    {
      title: 'Data Visualization',
      icon: PieChart,
      color: 'from-green-600 to-green-800',
      skills: [
        { name: 'Matplotlib', level: 92 },
        { name: 'Seaborn', level: 90 },
        { name: 'Plotly', level: 88 },
        { name: 'D3.js', level: 82 },
        { name: 'OpenCV', level: 85 },
      ],
    },
    {
      title: 'Statistical Analysis',
      icon: TrendingUp,
      color: 'from-pink-600 to-pink-800',
      skills: [
        { name: 'Hypothesis Testing', level: 95 },
        { name: 'Regression Analysis', level: 92 },
        { name: 'Time Series', level: 88 },
        { name: 'A/B Testing', level: 50 },
        { name: 'Bayesian Statistics', level: 40 },
      ],
    },
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for transforming data into insights and driving informed decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Apache Spark', 'Hadoop', 'Git', 'React.Js', 'Firebase', 'Github', 'STL',
                'Jupyter', 'VS Code', 'Stata', 'SPSS', 'Canva', 'Dev CPP'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;