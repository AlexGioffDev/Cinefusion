import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider/providers";
import SwitchButton from "./Components/SwitchButton/SwitchButton";
import { Viewport } from "next";

export const metadata: Metadata = {
  title: "CineFusion",
  description: "Discover new movies and tv series, and learn more about it...",
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="w-screen h-[100lvh] bg-primary dark:bg-secondary transition-all duration-[1s]  ease-in-out font-roboto">
        <Providers>
          <div className="fixed bottom-6 left-2 z-50">
            <SwitchButton />
          </div>
          <main className="w-full mx-auto h-full">
            {children}
            
          </main>
         
        </Providers>
      </body>
    </html>
  );
}
