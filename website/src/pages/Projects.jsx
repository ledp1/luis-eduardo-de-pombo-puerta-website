import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/profile';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const allTags = ['all', ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Open source work spanning AI agents, space research, ML systems, and civil
            engineering — pulled from my{' '}
            <a
              href="https://github.com/ledp1"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all bg-gray-50/30 dark:bg-gray-800/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
