import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "./components/ToastProvider";

export const metadata: Metadata = {
  title: "CodeBros PlayStation",
  description: "Sivas'ın En Gelişmiş Oyun Merkezi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-cyber-black text-white">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}