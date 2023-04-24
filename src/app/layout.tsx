// Styles
import '@/styles/globals.css';

// Library
import { Inter } from 'next/font/google';

// Utils
import { cn } from '@/lib/utils';

// Components
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>{children}</Providers>

        {/* Allow for more height on mobile devises */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
