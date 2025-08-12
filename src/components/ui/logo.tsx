"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface LogoProps {
  variant?: "full" | "isotipo";
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ variant = "full", width = 150, height = 40, className }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Text fallback that will always work
  const textLogo = (
    <div className={`flex items-center ${className || ""}`}>
      <span className="font-bold text-primary text-2xl">CELF</span>
      {variant === "full" && 
        <span className="ml-1 text-secondary font-medium">Conservação e Manutenção</span>
      }
    </div>
  );
  
  // If not mounted (SSR) or image error, show text fallback
  if (!mounted || imageError) {
    return (
      <Link href="/" className={`flex items-center ${className || ""}`}>
        {textLogo}
      </Link>
    );
  }

  // Try to use image-based logo when mounted on client
  const imgSrc = variant === "full" 
    ? "/logo.png" 
    : "/logo-isotipo.png";
    
  return (
    <Link href="/" className={`flex items-center ${className || ""}`}>
      <div className="relative flex items-center">
        <Image
          src={imgSrc}
          alt="CELF Logo"
          width={width}
          height={height}
          priority
          onError={() => setImageError(true)}
        />
        {imageError && textLogo}
      </div>
    </Link>
  );
}
