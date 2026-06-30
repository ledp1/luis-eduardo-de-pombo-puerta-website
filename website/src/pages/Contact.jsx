import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: XIcon,
      label: 'X (Twitter)',
      value: `@${profile.social.x.handle}`,
      href: profile.social.x.url,
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: profile.social.github.handle,
      href: profile.social.github.url,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.social.linkedin.handle,
      href: profile.social.linkedin.url,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: null,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Looking for co-founders and VCs to build in AI, space research, and engineering.
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    {value}
                    {external && <ExternalLink className="w-3 h-3" />}
                  </a>
                ) : (
                  <p className="text-gray-900 dark:text-white font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Let's build something</h2>
          <p className="text-blue-100 mb-6 text-sm">
            I'm looking for co-founders and VCs to build in AI agents, space hardware, and
            health tech — I'd love to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Hello%20from%20your%20website`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
