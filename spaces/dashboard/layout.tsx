import type { Metadata } from "next";
import { ReactQueryProvider } from './lib/reactQueryProvider'

export const metadata: Metadata = {
  title: "ReactQuery",
  description: "Contains the provider for react query",
};

export default function ReactQueryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </>
  );
}
