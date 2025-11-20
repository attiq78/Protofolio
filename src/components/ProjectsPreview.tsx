import Link from 'next/link';

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-20 bg-[#ededed] dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
          </span>
        </h2>
        <p className="text-gray-600 dark:text-white max-w-2xl mx-auto mb-10">
          Explore my portfolio of hosted projects with source code
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-[#7e22ce] to-[#4c1d95] text-white font-semibold shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M13 3L4 14v7h7l9-11V3h-7zm1.5 6.5L15 12l-3-3 1.5-1.5L15 9l-0.5-0.5L15 7.5z" />
          </svg>
          Explore Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;

