import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Player from "./_components/Player";

export const metadata: Metadata = {
  title: "IPSS",
  description: "Inter Planetary Sound Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
