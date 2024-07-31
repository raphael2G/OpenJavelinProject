"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function PageNotFound() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-50 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <h1 className="relative z-10 p-2 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-t from-neutral-900 to-neutral-950  text-center font-sans font-bold">
      <span className="text-blue-500">404</span> 
      </h1>
      <h1 className="relative z-10 p-2 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-t from-neutral-900 to-neutral-950  text-center font-sans font-bold">
      Page Not Found
      </h1>
    </div>
  );
}
