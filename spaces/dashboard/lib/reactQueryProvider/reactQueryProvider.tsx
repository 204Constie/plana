"use client";
 
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient()

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* should be anabled only in development mode */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
 