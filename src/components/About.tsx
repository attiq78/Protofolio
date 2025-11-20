import Image from 'next/image';
import { personalInfo } from '@/models/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-700 dark:text-white leading-relaxed mb-6">
                I'm passionate about creating elegant solutions to complex problems
                and continuously learning new technologies. My goal is to build
                applications that make a positive impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-gray-100 w-24">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white w-24">Email:</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="relative w-full h-full rounded-2xl bg-white dark:bg-gray-800 overflow-hidden">
                  <Image
                    src="/attiq.png"
                    alt={`${personalInfo.name} portrait`}
                    fill
                    sizes="(min-width: 768px) 400px, 280px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

