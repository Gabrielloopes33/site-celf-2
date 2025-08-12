"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(o => !o);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-blue-950/95 backdrop-blur-md border-b border-blue-200 shadow-sm' 
        : 'bg-blue-950/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-amber-50-600 hover:text-blue-600 p-2"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-50 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/servicos" className="text-amber-50 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </Link>
            <Link href="/como-funciona" className="text-amber-50 hover:text-blue-600 font-medium transition-colors">
              Como Funciona
            </Link>
            <Link href="/sobre" className="text-amber-50 hover:text-blue-600 font-medium transition-colors">
              Sobre
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-amber-50">
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-medium">(11) 99999-9999</span>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contato">Solicitar Proposta</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/servicos" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="/como-funciona" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              href="/sobre" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center mb-4 text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span className="font-medium">(11) 99999-9999</span>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contato">Solicitar Proposta</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
