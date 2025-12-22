import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Pramukh Raj Devkota - Pete",
  description: "Portfolio for Pramukh Raj Devkota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
