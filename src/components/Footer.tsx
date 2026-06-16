"use client";

import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold tracking-tight">
              <span className="dark:gradient-text gradient-text-light">Qadeer</span>
              <span className="text-muted-foreground font-light">.dev</span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/qadeerdev12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/qadeer-afzal-536a58246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Qadeer Afzal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
