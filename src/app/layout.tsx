import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Bhavya's CyberDeck",
  description: 'Portfolio of Bhavya Singh, a student exploring AI and Cybersecurity.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22#425c9d%22/><circle cx=%2250%22 cy=%2250%22 r=%2225%22 fill=%22#8D99AE%22/><path d=%22M42 40 C 50 35, 50 45, 58 50%22 stroke=%22#EDF2F4%22 stroke-width=%225%22 fill=%22none%22 stroke-linecap=%22round%22/><path d=%22M58 60 C 50 65, 50 55, 42 50%22 stroke=%22#EDF2F4%22 stroke-width=%225%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
