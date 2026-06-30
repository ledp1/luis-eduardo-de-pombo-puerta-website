import { ExternalLink } from 'lucide-react';
import { profile, education, skills, interests } from '../data/profile';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full ring-4 ring-blue-100 dark:ring-blue-900 object-cover"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {profile.name}
            </h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">{profile.title}</p>
            <a
              href={profile.social.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mt-2 text-sm"
            >
              @{profile.social.x.handle}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {profile.bio}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="space-y-6 mb-10">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="border-l-4 border-blue-500 pl-5 py-1"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <a
                  href={edu.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {edu.school}
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{edu.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interests</h2>
          <ul className="space-y-2 mb-10">
            {interests.map((interest) => (
              <li
                key={interest}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {interest}
              </li>
            ))}
          </ul>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Find me on{' '}
              <a
                href={profile.social.github.url}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              ,{' '}
              <a
                href={profile.social.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                X (@{profile.social.x.handle})
              </a>
              , or{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
