"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-primary/95 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg"
    >
      <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
        TradeConnect
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:text-gray-200 transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-primary/98 backdrop-blur-lg border-b border-white/20 md:hidden"
        >
          <div className="flex flex-col py-4">
            <Link href="/" className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors">Home</Link>
            <Link href="/about" className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors">About</Link>
            <Link href="/contact" className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors">Contact</Link>
            <Link href="/membership" className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors">Membership</Link>
            <Link href="/events" className="px-8 py-3 text-white hover:text-gray-200 hover:bg-secondary/50 transition-colors">Events</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
