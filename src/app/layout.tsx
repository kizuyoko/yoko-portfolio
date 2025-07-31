import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Sora,  } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dm_Sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400'],
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
      <body className="antialiased">
        <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-20 sm:p-20">
          <Header /> 
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
