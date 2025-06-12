import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Users, Target } from 'lucide-react';

const Experience = () => {
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
      title: "Data Analyst OneRoadmap",
      link: "https://oneroadmap.io/skills/da/certificate/CERT-4D8009D3",
    },
    {
      title: "Power BI Data Analyst Associate by LearnTube.ai",
      link: "https://learntube.ai/verify/certificate/0ee91134-ff5a-4e7e-94f9-f915539877b1",
    },
    {
      title: "Frontend Dev. Libraries by FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fcca1c6cb51-1dfa-4883-9dc9-1b93cf491be7/front-end-development-libraries",
    },
    {
      title: "The Ultimate Guide to Effective Communication by Ankur Warikoo",
      link: "https://www.linkedin.com/posts/rhythm-garg-93b1ba208_professionaldevelopment-effectivecommunication-activity-7209272933590999041-XUis?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET1onwBLsT2Ky0m6v18mijj5LsXUQAwBhM",
    },
    {
      title: "Data Analytics Job Simulation Delloitte",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Rnc6wGvXrWNtHKXn4_1749593863880_completion_certificate.pdf",
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
                  {certifications.map((cert, index) => (
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
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 ml-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 hover:text-teal-600 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>

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
    </section>
  );
};

export default Experience;