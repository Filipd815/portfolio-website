"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function ConditionalHeader() {
  const pathname = usePathname();
  
  // Hide header on individual project pages
  const isProjectPage = pathname.startsWith("/projects/");
  
  if (isProjectPage) {
    return null;
  }
  
  return <Header />;
}

