'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from './CustomCursor';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-gray-900 dark:text-white" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-900 dark:text-white" />
      )}
    </button>
  );
}

// 🔥 Centralized Navigation Config (clean + scalable)
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#open-source' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
      <CustomCursor />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Debasish Mohanty
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-16">{children}</main>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
