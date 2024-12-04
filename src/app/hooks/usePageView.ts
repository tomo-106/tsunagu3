"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; 

import { existsGaId, pageview } from "../lib/gtag";

const usePageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }
    pageview(pathname);
  }, [pathname]);
};

export default usePageView;
