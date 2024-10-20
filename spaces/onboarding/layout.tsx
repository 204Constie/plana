import type { Metadata } from "next";
import { Navbar } from './Components'

export const metadata: Metadata = {
  title: "Navigation",
  description: "Contains the navbar of the application",
};

export default function NavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}
