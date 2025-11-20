'use client';


import { personalInfo } from '@/models/data';
import Link from 'next/link';
import SocialIcon from './SocialIcon';


const Hero = () => {
  const heroSkills =
    personalInfo.skill
      ?.split(',')
      .map((value) => value.trim())
      .filter(Boolean) ?? [];

  return (
    <section
      id="home"
      className="py-20 bg-[#F5F5F5] dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
                Software Engineer
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl light:text-black dark:text-white mb-1">
            Hey! I'm {personalInfo.name}
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto mb-8">
              {personalInfo.bio}  
            </p>
            {heroSkills.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
                {heroSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-100 border border-blue-200 dark:border-blue-700 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

