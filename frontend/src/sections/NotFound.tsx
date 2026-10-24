import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { BRAND_NAME } from '../lib/constants';

export function NotFound() {
  return (
    <main className="min-h-screen bg-[#080d1f] flex items-center justify-center px-6">
      <div className="text-center max-w-md space-y-8">
        {/* Large 404 */}
        <div className="relative">
          <span
            className="text-[10rem] font-bold text-surface-border/30 leading-none select-none block"
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-white">Page not found.</p>
              <p className="text-slate-500 text-sm">The page you're looking for doesn't exist or has moved.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button as="a" href="/" size="md">
            <ArrowLeft size={15} />
            Back to {BRAND_NAME}
          </Button>
          <Button as="a" href="/#contact" variant="secondary" size="md">
            Start a Project
          </Button>
        </div>
      </div>
    </main>
  );
}
