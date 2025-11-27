import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">YourBrand</h2>
          <p className="mt-3 text-sm">
            Creating premium digital experiences with clean design,
            animations, and modern UI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: contact@yourbrand.com</p>
          <p className="text-sm">Phone: +977 9800000000</p>
          <p className="text-sm">Location: Kathmandu, Nepal</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <Facebook className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
