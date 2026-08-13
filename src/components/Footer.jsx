import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa';
import Container from './Container';

const socials = [
  { href: 'https://github.com/SantiagoNavarroUPC', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.facebook.com/santiago.navarrocalderon', label: 'Facebook', Icon: FaFacebookF },
  {
    href: 'https://www.linkedin.com/in/santiago-navarro-calderón-b58b3b2ba',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
  },
  { href: 'https://www.instagram.com/santiagonavarro00', label: 'Instagram', Icon: FaInstagram },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=santiago12.na@gmail.com&su=Contact%20Me&body=Hola,%20me%20gustaría%20contactarte.',
    label: 'Gmail',
    Icon: FaGoogle,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 py-8 dark:border-white/5">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-ink-500">
          © {new Date().getFullYear()} Santiago Navarro Calderon
        </p>
        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-brand-400/50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:text-ink-400 dark:hover:text-brand-300"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
