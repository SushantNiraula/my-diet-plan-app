// app/layout.tsx

import React from "react";
import { Metadata } from "next";
import "./globals.css"; // Make sure to create this file for global styles

export const metadata: Metadata = {
  title: "My Diet Plan App",
  description: "A personalized diet planning application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-indigo-600">
              My Diet Plan App
            </h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          {children}
        </main>
        <footer className="bg-white shadow-md p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            © 2023 My Diet Plan App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
