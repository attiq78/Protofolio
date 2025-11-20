import { projects } from '@/models/data';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                 hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-32 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-20">🚀</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 
                       group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 
                         text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 
                         dark:hover:text-blue-400 font-semibold transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 
                         dark:hover:text-blue-300 font-semibold transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Projects;

