import type { Metadata } from "next";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: "Headerstream Photography",
  description: "A Photography Website For Headerstream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="dark:text-white">
        <ThemeProvider attribute="class">
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
