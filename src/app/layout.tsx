import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Sora,  } from 'next/font/google';
import "./globals.css";

const dm_Sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600'],
});

const dm_Mono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600'],
});

export const metadata: Metadata = {
  title: "Yoko Portfolio",
  description: "Showcasing my work with React.js, Next.js, Vue.jsTypeScript, and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_Sans.variable} ${dm_Mono.variable} ${sora.variable}`}>
      <head>  
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
