import React from 'react';

export function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: ['Overview', 'Features', 'Integrations', 'Pricing']
    },
    {
      title: 'Solutions',
      links: ['Enterprise', 'Small Business', 'Startups', 'Agencies']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Tutorials', 'Blog']
    },
    {
      title: 'About Us',
      links: ['Company', 'Team', 'Careers', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
    }
  ];

  return (
    <footer className="bg-[hsl(216,33%,97%)] text-[hsl(216,28%,14%)] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-sm mb-4 text-[hsl(216,28%,14%)]">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-[hsl(214,17%,35%)] hover:text-[hsl(216,100%,50%)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-[hsl(214,32%,91%)] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[hsl(216,100%,50%)] rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-sm">SYNAPSE</span>
          </div>

          <p className="text-sm text-[hsl(214,17%,35%)]">
            © 2025 Synapse Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
