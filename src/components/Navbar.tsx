"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from 'next/image';

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-primary/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg"
    >
      <Link href="/" className="flex items-center gap-2 md:gap-3">
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full w-10 h-10 md:w-[50px] md:h-[50px] flex-shrink-0"/>
        <span className="text-sm sm:text-base md:text-xl font-bold text-white hover:text-gray-200 transition-colors leading-tight">
          Federation of Delhi Trade Association
        </span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        <Link href="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-200 transition-colors font-medium">About</Link>
        <Link href="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">Contact</Link>
        <Link href="/membership" className="text-white hover:text-gray-200 transition-colors font-medium">Membership</Link>
        <Link href="/events" className="text-white hover:text-gray-200 transition-colors font-medium">Events</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen((open) => !open);
        }}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden relative z-[60] text-white hover:text-gray-200 transition-colors p-1"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 z-[55] bg-primary/98 backdrop-blur-lg border-b border-white/20 md:hidden"
        >
          <div className="flex flex-col py-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
