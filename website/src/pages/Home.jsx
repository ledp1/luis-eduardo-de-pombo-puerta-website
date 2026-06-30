import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { profile, projects, experience } from '../data/profile';

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const currentRoles = experience.filter((e) => e.period === 'Present').slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {profile.title}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Luis
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6 leading-relaxed">
                {profile.tagline}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-8">
                <MapPin className="w-4 h-4" />
                {profile.location}
                <span className="mx-2">·</span>
                <a
                  href={profile.social.x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  @{profile.social.x.handle}
                </a>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 font-medium"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full opacity-20 blur-2xl" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current roles from X bio */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What I'm Building
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentRoles.map((role) => (
              <a
                key={role.id}
                href={role.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all bg-gray-50/50 dark:bg-gray-800/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {role.role}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {role.company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {role.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* X CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Follow on X
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            I share thoughts on AI, space research, startups, and engineering on{' '}
            <span className="font-medium">@{profile.social.x.handle}</span>.
          </p>
          <a
            href={profile.social.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition-opacity font-medium"
          >
            @{profile.social.x.handle}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
