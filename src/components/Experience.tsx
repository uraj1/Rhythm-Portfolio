import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Users, Target, X, ExternalLink, Eye } from 'lucide-react';

const Experience = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const experiences = [
    {
      title: "Secretary",
      company: "Colours: A Happy Place :)",
      location: "Kurukshetra, Haryana, India",
      period: "Jun 2025 - Present",
      type: "Leadership",
      description:
        "Leading the social media and event management teams for college mental health and cultural initiatives.",
      achievements: [
        "Managed 100+ members in organizing large-scale cultural events",
        "Oversaw content creation, event planning and community outreach",
        "Successfully executed multiple campus-wide mental health awareness campaigns"
      ],
      technologies: ["Community Outreach", "Event Management", "Leadership"],
      icon: Users,
      color: "from-pink-600 to-pink-800",
    },
    {
      title: "Outreach Manager",
      company: "TEDxNITKKR",
      location: "Kurukshetra, India",
      period: "Feb 2024 - Present",
      type: "Part-time",
      description:
        "Managing partnerships, speaker outreach, and community growth for TEDx events.",
      achievements: [
        "Built collaborations with external organizations & sponsors",
        "Handled speaker acquisition and management",
        "Coordinated venue, logistics and scheduling"
      ],
      technologies: ["Partnership Management", "Communication", "Team Collaboration"],
      icon: Award,
      color: "from-red-600 to-red-800",
    },
    {
      title: "Summer Intern",
      company: "Orbitor (Bharat Intern)",
      location: "India",
      period: "Feb 2024 - Present",
      type: "Internship",
      description:
        "Worked on web development projects as part of summer internship program.",
      achievements: [
        "Developed frontend features for client applications",
        "Worked on responsive design and REST API integrations"
      ],
      technologies: ["Web Development", "HTML", "CSS", "JavaScript"],
      icon: TrendingUp,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Intern",
      company: "CodSoft",
      location: "Remote",
      period: "Aug 2023 - Present",
      type: "Internship",
      description:
        "Worked as Front-End Developer focusing on UI/UX improvements and frontend feature development.",
      achievements: [
        "Developed multiple frontend modules",
        "Collaborated with cross-functional teams on product development"
      ],
      technologies: ["React", "JavaScript", "Problem Solving"],
      icon: TrendingUp,
      color: "from-green-600 to-green-800",
    },
    {
      title: "Member",
      company: "National Service Scheme (NSS)",
      location: "Kurukshetra, India",
      period: "Jan 2023 - Present",
      type: "Volunteer",
      description:
        "Contributing to community service activities and social initiatives.",
      achievements: [
        "Participated in multiple blood donation & social welfare camps",
        "Organized awareness drives for community development"
      ],
      technologies: ["Social Work", "Community Service"],
      icon: Target,
      color: "from-orange-600 to-orange-800",
    },
    {
      title: "Member",
      company: "Technobyte, NIT Kurukshetra",
      location: "Kurukshetra, Haryana, India",
      period: "Dec 2022 - Present",
      type: "Full-time",
      description:
        "Active member of the core technical club working on multiple software development & tech learning projects.",
      achievements: [
        "Collaborated in building technical projects and workshops",
        "Contributed to coding sessions & hackathons"
      ],
      technologies: ["JavaScript", "Python", "Team Collaboration"],
      icon: Users,
      color: "from-indigo-600 to-indigo-800",
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "National Institute of Technology, Kurukshetra",
      location: "Kurukshetra, Haryana, India",
      period: "2022 – Present",
      cgpa: "7.7/10",
      highlights: [
        "Data Mining & Analytics",
        "Big Data Analytics",
        "Computer Organization & Architecture",
        "Design & Analysis of Algorithms",
        "Distributed Computing",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Data Analyst OneRoadmap",
      provider: "OneRoadmap",
      issueDate: "March 2024",
      credentialId: "CERT-4D8009D3",
      description: "Comprehensive data analysis certification covering statistical analysis, data visualization, and business intelligence. This certification validates proficiency in data manipulation, statistical modeling, and deriving actionable insights from complex datasets.",
      skills: ["Statistical Analysis", "Data Visualization", "Business Intelligence", "SQL", "Python", "Excel"],
      link: "https://oneroadmap.io/skills/da/certificate/CERT-4D8009D3",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Data Analysis",
      duration: "120 hours",
      level: "Professional"
    },
    {
      id: 2,
      title: "Power BI Data Analyst Associate",
      provider: "LearnTube.ai",
      issueDate: "February 2024",
      credentialId: "0ee91134-ff5a-4e7e-94f9-f915539877b1",
      description: "Advanced Power BI certification focusing on data modeling, DAX functions, and creating interactive dashboards. Covers enterprise-level reporting solutions and data transformation techniques for business analytics.",
      skills: ["Power BI", "DAX", "Data Modeling", "Dashboard Design", "Business Analytics", "Data Transformation"],
      link: "https://learntube.ai/verify/certificate/0ee91134-ff5a-4e7e-94f9-f915539877b1",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Business Intelligence",
      duration: "80 hours",
      level: "Associate"
    },
    {
      id: 3,
      title: "Frontend Development Libraries",
      provider: "FreeCodeCamp",
      issueDate: "January 2024",
      credentialId: "fcca1c6cb51-1dfa-4883-9dc9-1b93cf491be7",
      description: "Comprehensive frontend development certification covering React, Redux, Sass, and modern JavaScript frameworks. Includes hands-on projects building responsive web applications and single-page applications.",
      skills: ["React", "Redux", "JavaScript", "HTML5", "CSS3", "Sass", "Bootstrap", "jQuery"],
      link: "https://www.freecodecamp.org/certification/fcca1c6cb51-1dfa-4883-9dc9-1b93cf491be7/front-end-development-libraries",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web Development",
      duration: "300 hours",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Effective Communication Mastery",
      provider: "Ankur Warikoo",
      issueDate: "December 2023",
      credentialId: "AW-EC-2023-1234",
      description: "Professional communication skills certification focusing on leadership communication, presentation skills, and interpersonal effectiveness. Covers verbal and non-verbal communication strategies for professional environments.",
      skills: ["Leadership Communication", "Presentation Skills", "Public Speaking", "Interpersonal Skills", "Team Communication"],
      link: "https://www.linkedin.com/posts/rhythm-garg-93b1ba208_professionaldevelopment-effectivecommunication-activity-7209272933590999041-XUis?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET1onwBLsT2Ky0m6v18mijj5LsXUQAwBhM",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Professional Development",
      duration: "40 hours",
      level: "Professional"
    },
    {
      id: 5,
      title: "Data Analytics Job Simulation",
      provider: "Deloitte",
      issueDate: "November 2023",
      credentialId: "9PBTqmSxAf6zZTseP",
      description: "Real-world data analytics simulation covering client consulting, data analysis methodologies, and business problem-solving. Includes case studies from actual Deloitte consulting projects and industry best practices.",
      skills: ["Consulting", "Data Analysis", "Business Problem Solving", "Client Communication", "Project Management"],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Rnc6wGvXrWNtHKXn4_1749593863880_completion_certificate.pdf",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Data Analysis",
      duration: "60 hours",
      level: "Professional"
    },
    {
  id: 6,
  title: "AI-Driven Data Analytics",
  provider: "LinkedIn Learning",
  issueDate: "June 2025", 
  credentialId: "SdcYCKe5kH9dQxSsu", 
  description: "Comprehensive training on AI-powered data analytics tools and techniques. Covers machine learning integration with traditional analytics, automated insights generation, and predictive modeling using AI algorithms.",
  skills: [
    "AI Analytics",
    "Machine Learning",
    "Predictive Modeling",
    "Data Visualization",
    "Automated Insights"
  ],
  link: "https://media.licdn.com/dms/image/v2/D5622AQEmThJVjLoTog/feedshare-shrink_2048_1536/B56Zd05lVEH8A0-/0/1750012942235?e=1753315200&v=beta&t=YjNs6TCa5Q2HX2DFOW0s4dcSV03l3Czcg3hKhG9vTzQ",
  image: "https://cdn.bap-software.net/2024/07/27001309/generative-AI.jpg",
  category: "Data Science",
  duration: "40 hours", // Update with actual duration
  level: "Intermediate"
}
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
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              A progressive career in data science with a track record of delivering impactful solutions
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 hidden lg:block"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } mb-8 sm:mb-12`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-600 flex items-center justify-center z-10 hidden lg:flex">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <motion.div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center lg:hidden`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">{exp.location}</span>
                            </div>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs whitespace-nowrap">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-3 sm:mb-4">
                        <h5 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Education
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-2 sm:mb-3">
                      CGPA: {edu.cgpa}
                    </p>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Certifications
              </h3>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="space-y-3 sm:space-y-4">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
                          {cert.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <motion.button
                          onClick={() => setSelectedCertification(cert)}
                          className="p-1 sm:p-1.5 text-blue-600 hover:text-teal-600 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.button>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 ml-2"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 hover:text-teal-600 transition-colors duration-200" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View More Certifications Button */}
                <motion.div className="mt-4 sm:mt-6 text-center">
                  <motion.button
                    onClick={() => setSelectedCertification('all')}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View All Certifications</span>
                  </motion.button>
                </motion.div>

                <motion.div
                  className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1 sm:mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Committed to staying current with the latest developments in data science and analytics. 
                    Regularly pursuing additional certifications and attending industry conferences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedCertification === 'all' ? (
                // All Certifications View
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      All Certifications
                    </h3>
                    <button
                      onClick={() => setSelectedCertification(null)}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                      <motion.div
                        key={cert.id}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedCertification(cert)}
                      >
                        <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                              {cert.category}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {cert.provider}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                          Issued: {cert.issueDate} • {cert.duration} • {cert.level}
                        </p>
                        <div className="flex items-center justify-between">
                          <motion.button
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                            whileHover={{ x: 5 }}
                          >
                            View Details →
                          </motion.button>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                // Individual Certification View
                <>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={selectedCertification.image}
                      alt={selectedCertification.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <button
                      onClick={() => setSelectedCertification(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2 inline-block">
                        {selectedCertification.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedCertification.title}</h3>
                      <p className="text-blue-200">{selectedCertification.provider}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">Issue Date</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{selectedCertification.issueDate}</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">Duration</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{selectedCertification.duration}</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">Level</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{selectedCertification.level}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedCertification.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertification.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Credential Information</h4>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <strong>Credential ID:</strong> {selectedCertification.credentialId}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <motion.a
                        href={selectedCertification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Certificate</span>
                      </motion.a>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;