import React from 'react';
import { SITE, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
          {SITE.name}
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <a
                href={link.to}
                className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm font-light">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
