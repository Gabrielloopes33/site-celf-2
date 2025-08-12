import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo variant="isotipo" width={80} height={80} />
            <p className="text-sm max-w-xs">
              Soluções completas para conservação e manutenção de espaços condominiais, 
              comerciais e industriais.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-secondary">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-secondary">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-secondary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/conservacao-condominial" className="hover:text-secondary transition">
                  Conservação Condominial
                </Link>
              </li>
              <li>
                <Link href="/servicos/conservacao-comercial" className="hover:text-secondary transition">
                  Conservação Comercial
                </Link>
              </li>
              <li>
                <Link href="/servicos/implantacao-industrial" className="hover:text-secondary transition">
                  Implantação Industrial
                </Link>
              </li>
              <li>
                <Link href="/servicos/obras" className="hover:text-secondary transition">
                  Obras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/como-funciona" className="hover:text-secondary transition">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/area-do-cliente" className="hover:text-secondary transition">
                  Área do Cliente
                </Link>
              </li>
              <li>
                <Link href="/transparencia-financeira" className="hover:text-secondary transition">
                  Transparência Financeira
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-secondary transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Principal, 1234, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>contato@celf.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} CELF. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/politica-de-privacidade" className="hover:text-secondary transition">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-secondary transition">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
