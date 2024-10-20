import type { Metadata } from "next";
import NavbarLayout from "@/onboarding/layout";
import ReactQueryLayout from "@/dashboard/layout";

export const metadata: Metadata = {
  title: "Root",
  description: "Contains base scaffolding of the application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarLayout>
          <ReactQueryLayout>
            {children}
          </ReactQueryLayout>
        </NavbarLayout>
      </body>
    </html>
  );
}
