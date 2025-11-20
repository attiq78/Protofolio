import { skills } from '@/models/data';

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  other: 'Other',
} as const;

const Skills = () => {
  const uniqueSkills = skills.filter(
    (skill, index, self) => self.findIndex((s) => s.name === skill.name) === index
  );

  const getBadgeContent = (name: string, icon?: string) => {
    if (icon) return icon;
    if (name.length <= 3) return name.toUpperCase();
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  const getGradient = (color?: string) => {
    if (!color) {
      return 'linear-gradient(135deg, #2563eb, #9333ea)';
    }
    return `linear-gradient(135deg, ${color}, #0f172a)`;
  };

  return (
    <section
      id="skills"
      className="py-20 bg-[#ededed] dark:bg-gray-900"
    >
        <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Technical Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-white max-w-2xl mx-auto mb-12">
            A curated selection of the technologies, frameworks, and tools I use to build robust,
            scalable, and delightful digital products.
          </p>

          <div className="flex justify-center">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uniqueSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 backdrop-blur shadow-xl shadow-blue-500/5 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div
                className="mb-6 h-16 w-16 rounded-2xl text-white font-semibold flex items-center justify-center text-lg shadow-lg shadow-black/30"
                style={{ background: getGradient(skill.color) }}
              >
                {getBadgeContent(skill.name, skill.icon)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{categoryLabels[skill.category]}</p>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

