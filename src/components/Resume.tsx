const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-[#F5F5F5] dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Resume
          </span>
        </h2>
        <p className="text-black dark:text-white max-w-2xl mx-auto mb-10">
          Download my resume to explore my experience, education, and the skills I bring to every
          project.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-[#7e22ce] to-[#4c1d95] text-white font-semibold shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 16.5l3.75-3.75-1.5-1.5L13.5 13.5V3h-3v10.5L9.75 11.25l-1.5 1.5L12 16.5zm-6 1.5h12v3H6v-3z" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

