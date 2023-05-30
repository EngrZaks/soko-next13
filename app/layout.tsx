import Nav from "./components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soko",
  description: "Kenya's number one Marketplace for new and used items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          <Nav />
          {children}
          <footer>
            <p className="white">welcome to Soko market</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
