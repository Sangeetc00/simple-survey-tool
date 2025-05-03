import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold text-lg">
              Survey Tool
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium hover:underline">
                My Surveys
              </Link>
              <Link href="/create" className="text-sm font-medium hover:underline">
                Create Survey
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/create">New Survey</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-6 md:py-8">{children}</main>
      <footer className="border-t">
        <div className="container flex h-16 items-center text-sm">
          <p>© {new Date().getFullYear()} Survey Tool</p>
        </div>
      </footer>
    </div>
  );
}