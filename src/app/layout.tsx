import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Elemental Messages",
  description: "👤✏️ Andrés Movilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-gray-900 font-sans text-white ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
