import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日本语测试",
  description: "日本语在线测试题 | Powered by notion & nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
