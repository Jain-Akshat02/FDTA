"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold text-white mb-4 inline-block">
              Federation of Delhi Trade Association(Regd.)
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering global trade professionals with insights, networking, and resources for a better business future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/faivm.delhipradesh/" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-white" />
                <span className="text-gray-300 text-sm">3848 Gali Mandir Wali, Pahari Dhiraj, Delhi-110006</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white" />
                <span className="text-gray-300 text-sm">+91 8010090563</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white" />
                <span className="text-gray-300 text-sm">devokorvin3@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Federation of Delhi Trade Association. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
