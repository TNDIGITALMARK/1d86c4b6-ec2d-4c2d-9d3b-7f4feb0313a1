import React from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-[hsl(211,52%,25%)] text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(216,100%,50%)] rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
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
            <span className="text-xl font-bold">SYNAPSE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Platform
            </a>
            <a href="#solutions" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Pricing
            </a>
            <a href="#integrations" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Integrations
            </a>
            <a href="#support" className="text-sm font-medium hover:text-[hsl(213,100%,65%)] transition-colors">
              Support
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 text-sm font-semibold"
            >
              Sign In
            </Button>
            <Button
              className="bg-[hsl(216,100%,50%)] hover:bg-[hsl(216,100%,45%)] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-sm"
            >
              Request Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
