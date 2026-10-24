import { ArrowLeft } from 'lucide-react';
import { BRAND_NAME } from '../lib/constants';

export function NotFound() {
  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center px-6">
      <div className="text-center max-w-sm space-y-8">
        <div className="relative">
          <span
            className="font-display select-none"
            style={{
              fontSize: '10rem',
              lineHeight: 1,
              color: '#F0EFED',
              letterSpacing: '-0.05em',
              display: 'block',
            }}
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-1.5 text-center">
              <p className="font-semibold text-ink" style={{ letterSpacing: '-0.02em' }}>Page not found.</p>
              <p className="text-sm text-ink-60">The page you're looking for doesn't exist or has moved.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-white rounded-md px-5 py-2.5 text-sm font-medium hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <ArrowLeft size={15} />
            Back to {BRAND_NAME}
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-ink-10 text-ink rounded-md px-5 py-2.5 text-sm font-medium hover:border-ink-20 hover:bg-ink-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Start a Project
          </a>
        </div>
      </div>
    </main>
  );
}
