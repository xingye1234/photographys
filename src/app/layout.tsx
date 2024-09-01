import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AntdRegistry } from "@ant-design/nextjs-registry";

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
          <AntdRegistry>
            {/* <Theme> */}
            {children}
            {/* </Theme> */}
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
