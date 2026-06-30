import { ExternalLink } from 'lucide-react';
import { experience } from '../data/profile';

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Experience
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            My professional journey — from civil engineering and government tech governance to
            RLHF at Scale AI and building startups in health tech and space research.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                    item.period === 'Present'
                      ? 'bg-blue-600 border-blue-600'
                      : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                  }`}
                />

                <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {item.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span
                      className={`self-start px-3 py-1 rounded-full text-xs font-medium ${
                        item.period === 'Present'
                          ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
