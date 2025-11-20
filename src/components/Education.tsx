import Image from 'next/image';
import { education } from '@/models/data';

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-[#F5F5F5] dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Educational Background
        </h2>
        <p className="text-center text-White max-w-2xl mx-auto mb-12 dark:text-white">
          I have pursued a rigorous academic path to build a strong foundation in software engineering
          and computer science.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((item) => (
            <div
              key={item.institution}
              className="flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-[#a23bf7]"

            >
              <div className="w-20 h-20 flex-shrink-0 rounded-full bg-slate-900/60 border border-white/20 overflow-hidden relative">
                <Image
                  src={item.logo}
                  alt={item.institution}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.institution}
                </h3>
                <p className="bg-gradient-to-r from-[#a23bf7] to-[#581c87] bg-clip-text text-transparent font-medium dark:text-transparent dark:bg-clip-text">
                  {item.degree}
                </p>
                {/* {item.description && (
                  <p className="text-gray-400 text-sm mt-3">{item.description}</p>
                )} */}
              </div>
              <div className="self-start md:self-center">
                <span className="inline-flex rounded-full bg-[#a23bf7]/10 text-[#a23bf7] border border-[#6a1bb4]/40 px-4 py-1 text-sm font-semibold">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

